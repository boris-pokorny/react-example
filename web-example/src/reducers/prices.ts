import * as types from "../constants/ActionTypes";
import { PricesState, PricesData, ActionType } from "../types";

function normalizePrices(rawData: any): PricesData | {} {
  if (!rawData || !rawData.data) {
    return {};
  }

  const csvData = rawData.data;
  if (!csvData || !Array.isArray(csvData)) {
    return {};
  }

  const labels: string[] = [];
  const datasets = [
    {
      label: "Open",
      data: csvData.map((row: any) => {
        const date = new Date(parseInt(row.timestamp)).toISOString().split('T')[0];
        labels.push(date);
        return parseFloat(row.open);
      }).reverse(),
    },
    {
      label: "Low",
      data: csvData.map((row: any) => {
        return parseFloat(row.low);
      }).reverse(),
    },
    {
      label: "High",
      data: csvData.map((row: any) => {
        return parseFloat(row.high);
      }).reverse(),
    },
    {
      label: "Close",
      data: csvData.map((row: any) => {
        return parseFloat(row.close);
      }).reverse(),
    },
  ];

  return {
    labels,
    datasets,
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
