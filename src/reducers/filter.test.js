import reducer from "./filter";
import * as types from "../constants/ActionTypes";
import { periodOptions } from "../constants/DropdownOptions";

describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      period: periodOptions[0].key,
      symbol: "",
    });
  });

  it("should handle symbol selected", () => {
    expect(
      reducer(undefined, {
        type: types.SYMBOL_SELECTED,
        value: "DOW",
      })
    ).toEqual({
      period: periodOptions[0].key,
      symbol: "DOW",
    });
  });

  it("should handle period selected", () => {
    expect(
      reducer(
        { symbol: "DOW" },
        {
          type: types.PERIOD_SELECTED,
          value: "W",
        }
      )
    ).toEqual({
      period: "W",
      symbol: "DOW",
    });
  });
});
