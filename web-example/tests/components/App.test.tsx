import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "../../src/components/App";

const mockStore = configureMockStore();
const store = mockStore({
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

test("renders", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId("chart-header")).toBeInTheDocument();
});
