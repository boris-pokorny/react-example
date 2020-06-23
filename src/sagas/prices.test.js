import SagaTester from "redux-saga-tester";

import filter from "../reducers/filter";
import { fetchPrices } from "../actions";
import prices from "../reducers/prices";
import { watchPrices } from "./prices";
import * as types from "../constants/ActionTypes";

test("prices saga", async () => {
  const delay = (t) => new Promise((res) => setTimeout(() => res(), t));
  const sagaTester = new SagaTester({
    initialState: {},
    reducers: {
      filter: filter,
      prices: prices,
    },
  });

  const mockSuccessResponse = {
    "Time Series": {},
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  sagaTester.start(watchPrices);

  sagaTester.dispatch(fetchPrices());
  expect(sagaTester.getState().prices.loading).toEqual(true);
  expect(global.fetch).toHaveBeenCalledTimes(1);

  await delay(0);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(sagaTester.getState().prices.data.labels).toEqual([]);
  expect(sagaTester.wasCalled(types.PRICES_FETCHED)).toEqual(true);
});
