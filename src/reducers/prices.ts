import * as types from "../constants/ActionTypes";
import { PricesState, PricesData, ActionType } from "../types";

function normalizePrices(rawData: any): PricesData | {} {
  if (!rawData) {
    return {};
  }
  let timeseries: any;
  Object.keys(rawData).forEach((key) => {
    if (key.includes("Time Series")) {
      timeseries = rawData[key];
    }
  });
  if (!timeseries) {
    return {};
  }

  const labels: string[] = [];
  const datasets = [
    {
      label: "Open",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          labels.push(key);
          return parseFloat(p["1. open"]);
        })
        .reverse(),
    },
    {
      label: "Low",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          return parseFloat(p["3. low"]);
        })
        .reverse(),
    },
    {
      label: "High",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          return parseFloat(p["2. high"]);
        })
        .reverse(),
    },
    {
      label: "Close",
      data: Object.keys(timeseries)
        .map((key) => {
          const p = timeseries[key];
          return parseFloat(p["4. close"]);
        })
        .reverse(),
    },
  ];

  return {
    labels: labels.reverse(),
    datasets: datasets,
  };
}

const defaultState: PricesState = {
  loading: false,
  data: {},
  error: null,
};

const prices = (state = defaultState, action: ActionType): PricesState => {
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
