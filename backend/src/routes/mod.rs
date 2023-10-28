mod healthcheck;

use std::path::PathBuf;

use axum::body::Body;
use axum::http::StatusCode;
use axum::response::{Html, IntoResponse};
use axum::{routing::get, Router};
use healthcheck::health_check;
use hyper::Request;
use tokio::fs;
use tower::ServiceExt;
use tower_http::{
    services::ServeDir,
    trace::{DefaultMakeSpan, DefaultOnResponse, TraceLayer},
};
use tracing::Level;

pub fn router(static_dir: String) -> Router {
    let api_router = Router::new().route("/health_check", get(health_check));

    Router::new()
        .nest("/api", api_router)
        .nest_service(
            "/",
            get(|req: Request<Body>| async move {
                let service = ServeDir::new(&static_dir).oneshot(req).await.unwrap();
                let status = service.status();

                if status == StatusCode::OK {
                    service.into_response()
                } else {
                    let index_path = PathBuf::from(static_dir).join("404.html");
                    fs::read_to_string(index_path)
                        .await
                        .map(|index_content| (StatusCode::OK, Html(index_content)).into_response())
                        .unwrap_or_else(|_| {
                            (StatusCode::NOT_FOUND, "404 not found").into_response()
                        })
                }
            }),
        )
        .layer(
            TraceLayer::new_for_http()
                .make_span_with(DefaultMakeSpan::new().level(Level::INFO))
                .on_response(DefaultOnResponse::new().level(Level::INFO)),
        )
}
