## Shady Meadows - Contact Form UI Tests

This repository contains UI tests for the Shady Meadows contact form

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: This project requires Node.js version v18.16.0. If you do not have nvm installed, please download and install this specific version of Node.js from [Download Node.js](https://nodejs.org/en/download/)
- **nvm**: [Get nvm](https://github.com/nvm-sh/nvm) (Optional - Recommended for managing multiple Node.js versions)
- **Docker**: [Get Docker](https://docs.docker.com/get-docker/) (Optional - Only if you want to run the tests in a Docker container)

### Getting Started

The following instructions enable you to run the UI tests locally and/or via Docker.

#### Cloning the Repository
```bash
git clone https://richlewis14/shady-meadows.git
cd shady-meadows
```

#### Install Dependencies

If you have nvm installed:
```bash
nvm use
```
This will automatically switch to the Node.js version specified in the `.nvmrc` file.

If you do not have nvm:

Ensure you are using Node.js version v18.16.0.

Then install the required dependencies:
```bash
npm install
npx playwright install chromium
```


### Running the tests

#### Locally:
```bash
npm run test
```

#### Via Docker (Optional):

``` bash
docker build -t shady-meadows .
docker run shady-meadows
```
