import * as types from "../constants/ActionTypes";

function normalizeSearchResults(rawData) {
  if (!(rawData && rawData.bestMatches)) {
    return {};
  }
  const options = [];
  rawData.bestMatches.forEach((bm) => {
    options.push({
      value: bm["2. name"],
      key: bm["1. symbol"],
    });
  });
  return options;
}

const defaultState = {
  options: [],
};

const search = (state = defaultState, action) => {
  switch (action.type) {
    case types.SYMBOL_FOUND:
      return {
        ...state,
        options: normalizeSearchResults(action.json),
      };
    case types.SEARCH_SYMBOL_FAILED:
      return {
        ...state,
        error: action.json,
      };
    default:
      return state;
  }
};

export default search;
