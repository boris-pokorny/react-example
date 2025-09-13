import * as types from "../constants/ActionTypes";
import { periodOptions } from "../constants/DropdownOptions";
import { FilterState, ActionType } from "../types";

const defaultState: FilterState = {
  symbol: "",
  period: periodOptions[0].key,
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
