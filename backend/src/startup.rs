use axum::{routing::IntoMakeService, Router};
use hyper::server::conn::AddrIncoming;
use std::net::TcpListener;

use crate::{configuration::Configuration, routes::router};

type Server = axum::Server<AddrIncoming, IntoMakeService<Router>>;

#[allow(dead_code)]
pub struct Application {
    base_url: String,
    port: u16,
    listener: TcpListener,
    static_dir: String,
}

impl Application {
    pub async fn build(config: Configuration) -> std::io::Result<Application> {
        let base_url = format!("{}:{}", &config.application.host, &config.application.port);
        let listener = TcpListener::bind(&base_url)?;
        let port = listener.local_addr().unwrap().port();
        let static_dir = config.application.static_dir;

        Ok(Application {
            base_url,
            listener,
            port,
            static_dir,
        })
    }

    pub fn run_until_stopped(self) -> Server {
        run(self.listener, self.static_dir)
    }

    pub fn port(&self) -> u16 {
        self.port
    }
}

pub fn run(listener: TcpListener, static_dir: String) -> Server {
    let router = router(static_dir);
    let addr = listener.local_addr().unwrap();

    println!("Listening on {}", &addr);

    axum::Server::from_tcp(listener)
        .unwrap()
        .serve(router.into_make_service())
}
