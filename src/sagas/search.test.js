import SagaTester from "redux-saga-tester";
import { searchSymbol } from "../actions";
import search from "../reducers/search";
import { watchSearch } from "./search";
import * as types from "../constants/ActionTypes";

test("search saga", async () => {
  const delay = (t) => new Promise((res) => setTimeout(() => res(), t));
  const sagaTester = new SagaTester({
    initialState: {},
    reducers: {
      search: search,
    },
  });

  const mockSuccessResponse = {
    bestMatches: [],
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  sagaTester.start(watchSearch);

  sagaTester.dispatch(searchSymbol("S"));
  expect(global.fetch).toHaveBeenCalledTimes(1);

  await delay(0);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(sagaTester.getState().search.options).toEqual([]);
  expect(sagaTester.wasCalled(types.SYMBOL_FOUND)).toEqual(true);
});
