import { all } from "redux-saga/effects";
import { watchPeriod, watchSymbol } from "./filter";
import { watchPrices } from "./prices";

export default function* rootSaga() {
  yield all([watchPrices(), watchSymbol(), watchPeriod()]);
}
