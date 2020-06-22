import { put, takeLatest, select } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

export const getFilter = (state) => state.filter;

function* checkFilter() {
  const filter = yield select(getFilter);
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
