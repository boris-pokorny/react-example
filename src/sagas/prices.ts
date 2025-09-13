import * as effects from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import { getFilter } from "./filter";
import fetchData from "../utils/Api";
import { FilterState } from "../types";

function* fetchPrices(): Generator<any, void, any> {
  try {
    const filter: FilterState = yield effects.select(getFilter);
    const json: any = yield effects.call(fetchData, {
      function: filter.period,
      symbol: filter.symbol,
    });
    const error = json["Error Message"] ?? json["Note"];
    if (error) {
      throw error;
    }
    yield effects.put({ type: types.PRICES_FETCHED, json: json });
  } catch (e) {
    yield effects.put({ type: types.FETCH_PRICES_FAILED, json: e });
  }
}

export function* watchPrices() {
  yield effects.takeLatest(types.FETCH_PRICES, fetchPrices);
}
