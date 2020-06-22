import * as types from "../constants/ActionTypes";

const defaultState = {
  symbol: "",
  period: "",
};

const filter = (state = defaultState, action) => {
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
