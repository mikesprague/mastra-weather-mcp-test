# mastra-weather-mcp-test

This is an example MCP server using the [Mastra](https://mastra.ai) framework.

It is not currently published anywhere but you can run and access it locally.

## About

> [!NOTE]
> Documentation in progress.

## Running Locally

### Prerequisites

- Node.js >= 22.x with pnpm >= 10.x
  - To install pnpm globally run `npm install -g pnpm`
- MongoDB Database
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier) used for this project
- OPTIONAL: Docker Desktop
  - You can choose to use Docker Desktop instead of installing Node.js and pnpm
    - If you already have Node.js/pnpm installed but want to use Docker, there are npm scripts included to run the docker-compose files ([see below](#docker-commands))
  - Example `docker-compose` command to run the server: `docker-compose -f ./docker-compose.dev.yml up`

### Getting Started

1. Clone repo
    - `git clone https://github.com/mikesprague/mastra-weather-mcp-test.git`
1. Enter directory
    - `cd mastra-weather-mcp-test`
1. Install dependencies
    - `pnpm install`
1. Copy `.env.example` to `.env` and then replace necessary values
    - `cp .env.example .env`

### Available Commands

#### Node/pnpm Commands

1. `pnpm mastra:dev` - Runs the Mastra dev server and makes the Mastra Playground available at `http://localhost:4111`
1. `pnpm mastra:build` - Builds a production version of the Mastra project
1. `pnpm mastra:start` - Starts a server running the production build of the Mastra project
1. `pnpm mastra:lint` - Runs the Mastra linter
1. `pnpm start` - Runs `pnpm mastra:build` followed by `pnpm mastra:start`

#### Docker Commands

1. `pnpm docker:build` - Builds the production Docker image for the Mastra project
1. `pnpm docker:dev:build` - Builds the development Docker image for the Mastra project
1. `pnpm do-co:up` - Uses `docker-compose` to start the production Docker container for the Mastra project
    - NOTE: this may take a while
      - it will build the Docker image if it does not already exist
      - running the server will download some required packages/dependencies
    - The server will be available at `http://localhost:4111`
      - Example MCP server URL: `http://localhost:4111/api/mcp/weather/mcp`
    - Use `ctrl` + `c` to stop the server
1. `pnpm do-co:down` - Stops the Mastra server, stops the Docker container, removes the container, removes the network, and removes the image
    - NOTE: be careful with this command as it will remove the Docker image - if you only want to stop the server, use `ctrl` + `c` instead
1. `pnpm do-co:dev:up` - Uses `docker-compose` to start the development Docker container for the Mastra project
    - NOTE: this may take a while
      - it will build the Docker image if it does not already exist
      - running the server will download some required packages/dependencies
    - The Mastra Playground will be available at `http://localhost:4111`
      - The MCP server within the Mastra Playground will be available at `http://localhost:4111/mcps/weather`
    - Use `ctrl` + `c` to stop the server
1. `pnpm do-co:dev:down` - Stops the Mastra server, stops the Docker container, removes the container, removes the network, and removes the image
    - NOTE: be careful with this command as it will remove the Docker image - if you only want to stop the server, use `ctrl` + `c` instead

### Accessing the MCP Server

Once the server is running, the MCP URL will be: `http://localhost:4111/api/mcp/weather/mcp`. You should be able to access the server and the `getWeather` tool using most MCP clients.
