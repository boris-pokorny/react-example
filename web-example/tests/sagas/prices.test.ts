import SagaTester from "redux-saga-tester";

import filter from "../../src/reducers/filter";
import { fetchPrices } from "../../src/actions";
import prices from "../../src/reducers/prices";
import { watchPrices } from "../../src/sagas/prices";
import * as types from "../../src/constants/ActionTypes";

test("prices saga", async () => {
  const delay = (t: number) => new Promise((res) => setTimeout(() => res(undefined), t));
  const sagaTester = new SagaTester({
    initialState: {
      filter: {
        symbol: "AAPL",
        period: "TIME_SERIES_DAILY"
      }
    },
    reducers: {
      filter: filter,
      prices: prices,
    },
  });

  const mockSuccessResponse = {
    success: true,
    data: [
      { timestamp: "1658808000000", open: "152.265", high: "153.085", low: "150.8", close: "151.6" }
    ]
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  // Add fetch to global if it doesn't exist
  if (!global.fetch) {
    global.fetch = jest.fn();
  }
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise as any);

  sagaTester.start(watchPrices);

  sagaTester.dispatch(fetchPrices());
  expect(sagaTester.getState().prices.loading).toEqual(true);
  expect(global.fetch).toHaveBeenCalledTimes(1);

  await delay(0);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(sagaTester.getState().prices.data.labels).toEqual(["2022-07-26"]);
  expect(sagaTester.wasCalled(types.PRICES_FETCHED)).toEqual(true);
});
