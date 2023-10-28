use crate::helper;

#[tokio::test]
async fn health_check() {
    let app = helper::spawn_test_app().await;

    let response = app
        .reqwest_client
        .get(format!("{}/api/health_check", &app.address))
        .send()
        .await
        .expect("Failed to send request");

    assert_eq!(response.status().as_u16(), 200);
}
