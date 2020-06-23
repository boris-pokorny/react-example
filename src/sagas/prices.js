import { put, takeLatest, select, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import { getFilter } from "./filter";

async function fetchData(url) {
  const baseUrl = "https://www.alphavantage.co";
  const apiKey = "K5CQE26OF90AEQDB";
  const response = await fetch(
    `${baseUrl}/${url}&apikey=${apiKey}&datatype=json`
  );
  return await response.json();
}

function* fetchPrices() {
  try {
    const filter = yield select(getFilter);
    const apiParams = `function=${filter.period}&symbol=${filter.symbol}`;
    const json = yield call(fetchData, `/query?${apiParams}`);
    const error = json["Error Message"];
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
