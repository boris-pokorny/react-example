import { watchPeriod } from "../../src/sagas/filter";
import SagaTester from "redux-saga-tester";

import filter from "../../src/reducers/filter";
import { symbolSelected, periodSelected } from "../../src/actions";
import prices from "../../src/reducers/prices";

test("filter saga", () => {
  const sagaTester = new SagaTester({
    initialState: {},
    reducers: {
      filter: filter,
      prices: prices,
    },
  });

  sagaTester.start(watchPeriod);

  sagaTester.dispatch(symbolSelected("S"));
  sagaTester.dispatch(periodSelected("W"));

  const state = sagaTester.getState();
  expect(state.filter).toEqual({
    period: "W",
    symbol: "S",
  });

  expect(state.prices.loading).toEqual(true);
});
