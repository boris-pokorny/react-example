import reducer from "./search";
import * as types from "../constants/ActionTypes";

describe("search reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      options: [],
    });
  });

  it("should handle search symbol", () => {
    expect(
      reducer(undefined, {
        type: types.SEARCH_SYMBOL,
      })
    ).toEqual({
      options: [],
    });
  });

  it("should handle symbol found", () => {
    expect(
      reducer(undefined, {
        type: types.SYMBOL_FOUND,
        json: {
          bestMatches: [],
        },
      })
    ).toEqual({
      options: [],
    });
  });

  it("should handle search symbol failed", () => {
    const error = {
      "Error Message": "ERROR",
    };
    expect(
      reducer(undefined, {
        type: types.SEARCH_SYMBOL_FAILED,
        json: error,
      })
    ).toEqual({
      options: [],
      error: error,
    });
  });
});
