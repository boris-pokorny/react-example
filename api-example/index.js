const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const readCSV = (symbol, period) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filename = `${symbol.toUpperCase()}.${period.toUpperCase()}.csv`;
    const fullPath = path.join(__dirname, 'data', filename);

    if (!fs.existsSync(fullPath)) {
      reject(new Error(`CSV file not found: ${filename}`));
      return;
    }

    fs.createReadStream(fullPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

app.get('/data/:symbol/:period', async (req, res) => {
  try {
    const { symbol, period } = req.params;
    const data = await readCSV(symbol, period);

    res.json({
      success: true,
      symbol,
      period,
      data: data,
      count: data.length
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/symbols', (req, res) => {
  try {
    const dataDir = path.join(__dirname, 'data');
    const files = fs.readdirSync(dataDir);

    // Build dictionary of symbols and their available periods
    const symbolPeriods = {};
    files.forEach(file => {
      if (file.endsWith('.csv')) {
        const parts = file.split('.');
        if (parts.length >= 3) { // SYMBOL.PERIOD.csv
          const symbol = parts[0];
          const period = parts[1].toLowerCase();

          if (!symbolPeriods[symbol]) {
            symbolPeriods[symbol] = [];
          }

          if (!symbolPeriods[symbol].includes(period)) {
            symbolPeriods[symbol].push(period);
          }
        }
      }
    });

    // Sort periods for each symbol
    Object.keys(symbolPeriods).forEach(symbol => {
      symbolPeriods[symbol].sort();
    });

    res.json({
      success: true,
      symbols: symbolPeriods,
      count: Object.keys(symbolPeriods).length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Failed to read symbols: ${error.message}`
    });
  }
});

app.get('/', (req, res) => {
  res.json({
    message: 'CSV REST API',
    endpoints: [
      'GET /data/:symbol/:period - Returns data from CSV file (e.g., /data/uber/day)',
      'GET /symbols - Returns all available symbols with company names'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});