import * as types from "../constants/ActionTypes";
import { SearchState, ActionType, DropdownOption } from "../types";

function normalizeSearchResults(rawData: any): DropdownOption[] | {} {
  if (!(rawData && rawData.bestMatches)) {
    return {};
  }
  const options: DropdownOption[] = [];
  rawData.bestMatches.forEach((bm: any) => {
    options.push({
      value: bm["2. name"],
      key: bm["1. symbol"],
    });
  });
  return options;
}

const defaultState: SearchState = {
  options: [],
};

const search = (state = defaultState, action: ActionType): SearchState => {
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
