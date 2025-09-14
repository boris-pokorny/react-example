import React from "react";
import configureMockStore from "redux-mock-store";
import ChartContainer from "../../src/containers/ChartContainer";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { MockStore } from "redux-mock-store";

const mockStore = configureMockStore();

describe("ChartContainer", () => {
  let store: MockStore;
  let component: RenderResult;

  beforeEach(() => {
    store = mockStore({
      filter: {
        symbol: "",
        period: ""
      },
      prices: {
        loading: false,
        data: {},
        error: null
      },
      search: {
        options: [],
        error: null
      },
      symbols: {
        loading: false,
        data: {},
        error: null
      }
    });

    component = render(
      <Provider store={store}>
        <ChartContainer />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component).toMatchSnapshot();
    expect(component.getByText("No data")).toBeInTheDocument();
  });
});
