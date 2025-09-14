import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ChartHeader from "../../src/components/ChartHeader";

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
  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <ChartHeader />
    </Provider>
  );
  expect(getAllByText(/Symbol/).pop()).toBeInTheDocument();
  expect(getByText(/Select symbol first/)).toBeInTheDocument();
  expect(getByText(/Reload/)).toBeInTheDocument();
});
