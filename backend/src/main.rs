use backend::{get_config, get_subscriber, init_subscriber, Application};

#[tokio::main]
async fn main() -> std::io::Result<()> {
    let subscriber = get_subscriber("portfolio".into(), "info".into(), std::io::stdout);
    init_subscriber(subscriber);

    let config = get_config().expect("Failed to get the config file.");

    let _ = Application::build(config)
        .await
        .expect("Failed to build the app.")
        .run_until_stopped()
        .await;

    Ok(())
}
