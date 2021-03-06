import { put, takeLatest, select, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import { getFilter } from "./filter";
import fetchData from "../utils/Api";

function* fetchPrices() {
  try {
    const filter = yield select(getFilter);
    const json = yield call(fetchData, {
      function: filter.period,
      symbol: filter.symbol,
    });
    const error = json["Error Message"] ?? json["Note"];
    if (error) {
      throw error;
    }
    yield put({ type: types.PRICES_FETCHED, json: json });
  } catch (e) {
    yield put({ type: types.FETCH_PRICES_FAILED, json: e });
  }
}

export function* watchPrices() {
  yield takeLatest(types.FETCH_PRICES, fetchPrices);
}
