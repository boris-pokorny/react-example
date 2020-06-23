import * as actions from "./index";
import * as types from "../constants/ActionTypes";

describe("actions", () => {
  it("should create an action to fetch prices", () => {
    const id = "X";
    const expectedAction = {
      type: types.FETCH_PRICES,
      id,
    };
    expect(actions.fetchPrices(id)).toEqual(expectedAction);
  });

  it("should create an action as prices fetched", () => {
    const id = "X";
    const expectedAction = {
      type: types.PRICES_FETCHED,
      id,
    };
    expect(actions.pricesFetched(id)).toEqual(expectedAction);
  });

  it("should select symbol", () => {
    const value = "X";
    const expectedAction = {
      type: types.SYMBOL_SELECTED,
      value,
    };
    expect(actions.symbolSelected(value)).toEqual(expectedAction);
  });

  it("should select period", () => {
    const value = "X";
    const expectedAction = {
      type: types.PERIOD_SELECTED,
      value,
    };
    expect(actions.periodSelected(value)).toEqual(expectedAction);
  });
});
