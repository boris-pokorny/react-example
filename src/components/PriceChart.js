import React from "react";
import { Line } from "react-chartjs-2";
import Spinner from "./Spinner";

const PriceChart = ({ prices, loading, error }) => {
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

  if (!prices.datasets) {
    return <h2> No data </h2>;
  }

  prices.datasets.forEach((d, i) => {
    d.backgroundColor = `rgba(75,192,${192 - 10 * i},0.5)`;
    d.borderColor = "rgba(0,0,0,1)";
    d.borderWidth = 2;
  });

  return (
    <div>
      <Line
        data={prices}
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
