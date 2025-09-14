import { put, takeLatest, call, select } from "./effects";
import * as types from "../constants/ActionTypes";
import fetchData from "../utils/Api";
import { ActionType, RootState } from "../types";

function* searchSymbol(action: ActionType): Generator<any, void, any> {
  try {
    const state: RootState = yield select();
    const symbolsData = state.symbols.data;

    // Return all available symbols for the SearchSymbol component
    const symbolArray = Object.keys(symbolsData).map(symbol => ({
      symbol: symbol,
      name: symbol
    }));

    const result = {
      symbols: symbolArray
    };

    yield put({ type: types.SYMBOL_FOUND, json: result });
  } catch (e) {
    yield put({ type: types.SEARCH_SYMBOL_FAILED, json: e });
  }
}

export function* watchSearch() {
  yield takeLatest(types.SEARCH_SYMBOL, searchSymbol);
}
