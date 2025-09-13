import React from "react";
import { render } from "@testing-library/react";
import PriceChart from "../../src/components/PriceChart";

test("renders price-chart no data", () => {
  const { getByText } = render(<PriceChart data={{}} />);
  expect(getByText(/No data/)).toBeInTheDocument();
});

test("renders price-chart", () => {
  const data = {
    labels: ["A"],
    datasets: [
      {
        data: [0],
        label: "Open",
      },
      {
        data: [0],
        label: "Low",
      },
      {
        data: [0],
        label: "High",
      },
      {
        data: [0],
        label: "Close",
      },
    ],
  };

  const { getByTestId } = render(<PriceChart data={data} />);
  expect(getByTestId("price-chart")).toBeInTheDocument();
});

test("renders price-chart error", () => {
  const { getByText } = render(<PriceChart data={{}} error="ERROR" />);
  expect(getByText(/ERROR/)).toBeInTheDocument();
});
