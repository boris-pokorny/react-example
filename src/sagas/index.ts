import * as effects from "redux-saga/effects";
import { watchPeriod, watchSymbol } from "./filter";
import { watchPrices } from "./prices";
import { watchSearch } from "./search";

export default function* rootSaga() {
  yield effects.all([watchPrices(), watchSymbol(), watchPeriod(), watchSearch()]);
}
