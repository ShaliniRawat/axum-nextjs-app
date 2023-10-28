use once_cell::sync::Lazy;
use reqwest::redirect::Policy;
use std::env;

static TRACING: Lazy<()> = Lazy::new(|| {
    let default_filter_level = "info".to_string();
    let subscriber_name = "tests".to_string();

    if env::var("TEST_LOG").is_ok() {
        let subscriber =
            backend::get_subscriber(subscriber_name, default_filter_level, std::io::stdout);
        backend::init_subscriber(subscriber);
    } else {
        let subscriber =
            backend::get_subscriber(subscriber_name, default_filter_level, std::io::sink);
        backend::init_subscriber(subscriber);
    }
});

pub struct TestServer {
    pub address: String,
    pub port: u16,
    pub reqwest_client: reqwest::Client,
}

pub async fn spawn_test_app() -> TestServer {
    Lazy::force(&TRACING);
    let config = backend::get_config().expect("Failed to read the configuration");

    let app = backend::Application::build(config)
        .await
        .expect("Failed to build the configuration.");

    let app_port = app.port();
    let address = format!("http://127.0.0.1:{}", app_port);

    let reqwest_client = reqwest::Client::builder()
        .redirect(Policy::none())
        .build()
        .unwrap();

    _ = tokio::spawn(app.run_until_stopped());

    TestServer {
        address,
        port: app_port,
        reqwest_client,
    }
}
