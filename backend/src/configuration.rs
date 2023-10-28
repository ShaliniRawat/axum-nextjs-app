use config::{Config, File};
use serde::Deserialize;
use serde_aux::field_attributes::deserialize_number_from_string;

pub enum Environment {
    Local,
    Production,
}

impl Environment {
    pub fn as_str(&self) -> &'static str {
        match self {
            Environment::Local => "local",
            Environment::Production => "production",
        }
    }
}

impl TryFrom<String> for Environment {
    type Error = String;
    fn try_from(value: String) -> Result<Self, Self::Error> {
        match value.to_lowercase().as_str() {
            "local" => Ok(Environment::Local),
            "production" => Ok(Environment::Production),
            other => Err(format!(
                "{} is not a supported environment. use either 'local' or 'production'",
                other
            )),
        }
    }
}

#[derive(Deserialize)]
pub struct Configuration {
    pub application: ApplicationSettings,
}

#[derive(Deserialize)]
pub struct ApplicationSettings {
    pub host: String,
    pub base_url: String,
    #[serde(deserialize_with = "deserialize_number_from_string")]
    pub port: u16,
    pub static_dir: String
}

pub fn get_config() -> Result<Configuration, config::ConfigError> {
    let env: Environment = std::env::var("APP_ENVIRONMENT")
        .unwrap_or_else(|_| "local".into())
        .try_into()
        .expect("Failed to get APP_ENVIRONMENT");

    let config = Config::builder()
        .add_source(File::with_name("configuration/base.yaml"))
        .add_source(File::with_name(&format!(
            "configuration/{}.yaml",
            env.as_str()
        )))
        .add_source(config::Environment::with_prefix("APP").separator("__"))
        .build()?;

    config.try_deserialize()
}
