import { put, takeLatest, select, call } from "./effects";
import * as types from "../constants/ActionTypes";
import { getFilter } from "./filter";
import fetchData from "../utils/Api";
import { FilterState } from "../types";

function* fetchPrices(): Generator<any, void, any> {
  try {
    const filter: FilterState = yield select(getFilter);
    const json: any = yield call(fetchData, {
      period: filter.period,
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
