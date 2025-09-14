import { all } from "./effects";
import { watchPeriod, watchSymbol } from "./filter";
import { watchPrices } from "./prices";
import { watchSearch } from "./search";
import { watchSymbols } from "./symbols";

export default function* rootSaga() {
  yield all([watchPrices(), watchSymbol(), watchPeriod(), watchSearch(), watchSymbols()]);
}
