import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Spinner from "./Spinner";
import { PricesData } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const colors = ["red", "blue", "green", "magenta"];

interface PriceChartProps {
  data: PricesData | {};
  loading: boolean;
  error: string | null;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, loading, error }) => {
  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (error) {
    return (
      <div>
        <h2> Error </h2> <div>{error}</div>
      </div>
    );
  }

  const chartData = data as PricesData;
  if (!chartData.datasets) {
    return <h2> No data </h2>;
  }

  chartData.datasets.forEach((d, i) => {
    d.fill = false;
    d.borderColor = colors[i % colors.length];
    d.borderWidth = 2;
  });

  return (
    <div data-testid="price-chart">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Prices",
              font: {
                size: 20,
              },
            },
            legend: {
              display: true,
              position: "right",
            },
          },
          scales: {
            x: {
              type: "category",
            },
            y: {
              type: "linear",
            },
          },
        }}
      />
    </div>
  );
};

export default PriceChart;
