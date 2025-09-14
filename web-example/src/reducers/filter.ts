import * as types from "../constants/ActionTypes";
import { FilterState, ActionType } from "../types";

const defaultState: FilterState = {
  symbol: "",
  period: "",
};

const filter = (state = defaultState, action: ActionType): FilterState => {
  switch (action.type) {
    case types.SYMBOL_SELECTED:
      return {
        ...state,
        symbol: action.value,
      };
    case types.PERIOD_SELECTED:
      return {
        ...state,
        period: action.value,
      };
    default:
      return state;
  }
};

export default filter;
