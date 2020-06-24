import React from "react";
import { Line } from "react-chartjs-2";
import Spinner from "./Spinner";

const colors = ["red", "blue", "green", "magenta"];

const PriceChart = ({ data, loading, error }) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <h2> Error </h2> <div>{error}</div>
      </div>
    );
  }

  if (!data.datasets) {
    return <h2> No data </h2>;
  }

  data.datasets.forEach((d, i) => {
    d.fill = false;
    d.borderColor = colors[i % colors.length];
    d.borderWidth = 2;
  });

  return (
    <div data-testid="price-chart">
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: "Prices",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default PriceChart;
