import { put, select, takeLatest } from "./effects";
import * as types from "../constants/ActionTypes";
import { RootState, FilterState } from "../types";

export const getFilter = (state: RootState): FilterState => {
  return state.filter;
};

function* checkFilter(): Generator<any, void, FilterState> {
  const filter: FilterState = yield select(getFilter);
  if (filter.symbol && filter.period) {
    yield put({ type: types.FETCH_PRICES });
  }
}

export function* watchPeriod() {
  yield takeLatest(types.PERIOD_SELECTED, checkFilter);
}

export function* watchSymbol() {
  yield takeLatest(types.SYMBOL_SELECTED, checkFilter);
}
