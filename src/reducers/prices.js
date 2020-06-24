import * as types from "../constants/ActionTypes";

function normalizePrices(rawData) {
  if (!rawData) {
    return {};
  }
  let timeseries;
  Object.keys(rawData).map((key) => {
    if (key.includes("Time Series")) {
      timeseries = rawData[key];
    }
  });
  if (!timeseries) {
    return {};
  }

  const labels = [];
  const datasets = [
    {
      label: "Open",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          labels.push(key);
          return p["1. open"];
        })
        .reverse(),
    },
    {
      label: "Low",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          return p["3. low"];
        })
        .reverse(),
    },
    {
      label: "High",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          return p["2. high"];
        })
        .reverse(),
    },
    {
      label: "Close",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          return p["4. close"];
        })
        .reverse(),
    },
  ];

  return {
    labels: labels.reverse(),
    datasets: datasets,
  };
}

const defaultState = {
  loading: false,
  data: {},
  error: null,
};

const prices = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_PRICES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.PRICES_FETCHED:
      return {
        ...state,
        loading: false,
        error: null,
        data: normalizePrices(action.json),
      };
    case types.FETCH_PRICES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.json,
      };
    default:
      return state;
  }
};

export default prices;
