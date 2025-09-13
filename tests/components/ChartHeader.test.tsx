import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ChartHeader from "../../src/components/ChartHeader";

const mockStore = configureMockStore();
const store = mockStore({
  prices: {
    data: {},
  },
  search: {
    options: [],
  },
});

test("renders", () => {
  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <ChartHeader />
    </Provider>
  );
  expect(getAllByText(/Symbol/).pop()).toBeInTheDocument();
  expect(getByText(/Period/)).toBeInTheDocument();
  expect(getByText(/Reload/)).toBeInTheDocument();
});
