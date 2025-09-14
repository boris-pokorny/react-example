# React Example with CSV REST API

An application with a React frontend and a Node.js backend API that serves CSV files with stock/financial data.

## Project Structure

```
react-example/
├── api-example/         # Node.js REST API server
│   ├── data/            # CSV data files (*.csv)
│   ├── index.js         # Express server
│   └── package.json     # API dependencies
├── web-example/         # React frontend application
│   ├── src/             # React source code
│   ├── tests/           # Test files
│   └── package.json     # Frontend dependencies
└── README.md            # This file
```

## Quick Start

### 1. Start the API Server

```bash
cd api-example
npm install
npm start
```

The API will be available at `http://localhost:3001`

### 2. Start the Frontend

```bash
cd web-example
npm install
npm start
```

The web application will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - API information and available endpoints
- `GET /symbols` - Returns all available stock symbols with their periods
- `GET /data/:symbol/:period` - Returns price data for a specific stock symbol and period

Example: `GET /data/AAPL/day` returns daily data for Apple stock

## Development

### Running Tests

```bash
cd web-example
npm test
```

### Building for Production

```bash
cd web-example
npm run build
```
