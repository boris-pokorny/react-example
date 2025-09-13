import * as effects from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import { RootState, FilterState } from "../types";

export const getFilter = (state: RootState): FilterState => {
  return state.filter;
};

function* checkFilter(): Generator<any, void, FilterState> {
  const filter: FilterState = yield effects.select(getFilter);
  if (filter.symbol && filter.period) {
    yield effects.put({ type: types.FETCH_PRICES });
  }
}

export function* watchPeriod() {
  yield effects.takeLatest(types.PERIOD_SELECTED, checkFilter);
}

export function* watchSymbol() {
  yield effects.takeLatest(types.SYMBOL_SELECTED, checkFilter);
}
