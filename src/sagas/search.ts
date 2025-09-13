import * as effects from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import fetchData from "../utils/Api";
import { ActionType } from "../types";

function* searchSymbol(action: ActionType): Generator<any, void, any> {
  try {
    const json: any = yield effects.call(fetchData, {
      function: "SYMBOL_SEARCH",
      keywords: action.searchTerm,
    });
    const error = json["Error Message"];
    if (error) {
      throw error;
    }
    yield effects.put({ type: types.SYMBOL_FOUND, json: json });
  } catch (e) {
    yield effects.put({ type: types.SEARCH_SYMBOL_FAILED, json: e });
  }
}

export function* watchSearch() {
  yield effects.takeLatest(types.SEARCH_SYMBOL, searchSymbol);
}
