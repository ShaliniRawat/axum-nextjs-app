# rust
FROM lukemathwalker/cargo-chef:latest-rust-1.73.0 as chef
WORKDIR /app
RUN apt update && apt install lld clang -y

FROM chef as planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef as rust-builder
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
RUN cargo build --release 

# index
FROM node:21-alpine as node-builder
WORKDIR /app
COPY . .
RUN npm run build

#runtime stage
FROM debian:unstable-slim AS runtime
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

COPY --from=node-builder /app/out /out
COPY --from=rust-builder /app/target/release/backend backend
COPY configuration configuration
ENV APP_ENVIRONMENT production
ENTRYPOINT ["./backend"]
