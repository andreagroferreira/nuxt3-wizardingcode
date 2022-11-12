#!/bin/bash

# Copy .env file
if [ ! -f ./.env ]; then
    cp ./.env.dev ./.env
fi

# Create shared gateway network
docker network create gateway

# Build containers
make build


# Install packages
docker-compose -f docker-compose.dev.yml run --rm --no-deps \
  --user "$(id -u)":"$(id -g)" app \
  yarn install

# Start containers
make up

# Print the final message
echo "The client app has been installed and run on http://localhost:3000."
