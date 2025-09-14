import { put, takeLatest, call } from "./effects";
import * as types from "../constants/ActionTypes";
import { fetchSymbols } from "../utils/Api";

function* fetchSymbolsData(): Generator<any, void, any> {
  try {
    const symbols: any = yield call(fetchSymbols);
    yield put({ type: types.SYMBOLS_FETCHED, symbols: symbols });
  } catch (e) {
    yield put({ type: types.FETCH_SYMBOLS_FAILED, json: e });
  }
}

export function* watchSymbols() {
  yield takeLatest(types.FETCH_SYMBOLS, fetchSymbolsData);
}