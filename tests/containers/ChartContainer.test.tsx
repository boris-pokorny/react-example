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
      prices: {
        data: {},
      },
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
