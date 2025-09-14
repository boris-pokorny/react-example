import * as types from "../constants/ActionTypes";
import { SymbolsState, ActionType } from "../types";

const defaultState: SymbolsState = {
  loading: false,
  data: {},
  error: null,
};

const symbols = (state = defaultState, action: ActionType): SymbolsState => {
  switch (action.type) {
    case types.FETCH_SYMBOLS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SYMBOLS_FETCHED:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.symbols,
      };
    case types.FETCH_SYMBOLS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.json,
      };
    default:
      return state;
  }
};

export default symbols;