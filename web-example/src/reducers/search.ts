import * as types from "../constants/ActionTypes";
import { SearchState, ActionType, DropdownOption } from "../types";

function normalizeSearchResults(rawData: any): DropdownOption[] {
  if (!(rawData && rawData.symbols)) {
    return [];
  }
  const options: DropdownOption[] = [];
  rawData.symbols.forEach((symbol: any) => {
    options.push({
      value: symbol.symbol,
      key: symbol.symbol,
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
