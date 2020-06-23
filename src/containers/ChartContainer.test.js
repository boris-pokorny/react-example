import React from "react";
import configureMockStore from "redux-mock-store";
import ChartContainer from "./ChartContainer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("ChartContainer", () => {
  let store;
  let component;

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
