import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ChartHeader from "./ChartHeader";

const mockStore = configureMockStore();
const store = mockStore({
  prices: {
    data: {},
  },
});

test("renders", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ChartHeader />
    </Provider>
  );
  expect(getByText(/Symbol/)).toBeInTheDocument();
  expect(getByText(/Period/)).toBeInTheDocument();
  expect(getByText(/Reload/)).toBeInTheDocument();
});
