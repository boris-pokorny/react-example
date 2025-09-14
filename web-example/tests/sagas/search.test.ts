import SagaTester from "redux-saga-tester";
import { searchSymbol } from "../../src/actions";
import search from "../../src/reducers/search";
import symbols from "../../src/reducers/symbols";
import { watchSearch } from "../../src/sagas/search";
import * as types from "../../src/constants/ActionTypes";

test("search saga", async () => {
  const delay = (t: number) => new Promise((res) => setTimeout(() => res(undefined), t));
  const sagaTester = new SagaTester({
    initialState: {
      symbols: {
        loading: false,
        data: {
          "AAPL": ["day", "hour"],
          "MSFT": ["day", "hour"],
          "TSLA": ["day", "hour"]
        },
        error: null
      }
    },
    reducers: {
      search: search,
      symbols: symbols,
    },
  });

  sagaTester.start(watchSearch);

  sagaTester.dispatch(searchSymbol("S"));

  await delay(0);
  // Should return all available symbols (no filtering)
  const expectedOptions = [
    { key: "AAPL", value: "AAPL" },
    { key: "MSFT", value: "MSFT" },
    { key: "TSLA", value: "TSLA" }
  ];
  expect(sagaTester.getState().search.options).toEqual(expectedOptions);
  expect(sagaTester.wasCalled(types.SYMBOL_FOUND)).toEqual(true);
});
