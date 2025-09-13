import SagaTester from "redux-saga-tester";
import { searchSymbol } from "../../src/actions";
import search from "../../src/reducers/search";
import { watchSearch } from "../../src/sagas/search";
import * as types from "../../src/constants/ActionTypes";

test("search saga", async () => {
  const delay = (t: number) => new Promise((res) => setTimeout(() => res(undefined), t));
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

  // Add fetch to global if it doesn't exist
  if (!global.fetch) {
    global.fetch = jest.fn();
  }
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise as any);

  sagaTester.start(watchSearch);

  sagaTester.dispatch(searchSymbol("S"));
  expect(global.fetch).toHaveBeenCalledTimes(1);

  await delay(0);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(sagaTester.getState().search.options).toEqual([]);
  expect(sagaTester.wasCalled(types.SYMBOL_FOUND)).toEqual(true);
});
