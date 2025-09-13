import reducer from "../../src/reducers/prices";
import * as types from "../../src/constants/ActionTypes";

describe("prices reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      loading: false,
      error: null,
    });
  });

  it("should handle fetch prices", () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_PRICES,
      })
    ).toEqual({
      data: {},
      loading: true,
      error: null,
    });
  });

  it("should handle prices fetched", () => {
    const data = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Open",
        },
        {
          data: [],
          label: "Low",
        },
        {
          data: [],
          label: "High",
        },
        {
          data: [],
          label: "Close",
        },
      ],
    };
    expect(
      reducer(undefined, {
        type: types.PRICES_FETCHED,
        json: {
          "Time Series": {},
        },
      })
    ).toEqual({
      data: data,
      loading: false,
      error: null,
    });
  });

  it("should handle fetch prices failed", () => {
    const error = {
      "Error Message": "ERROR",
    };
    expect(
      reducer(undefined, {
        type: types.FETCH_PRICES_FAILED,
        json: error,
      })
    ).toEqual({
      data: {},
      loading: false,
      error: error,
    });
  });
});
