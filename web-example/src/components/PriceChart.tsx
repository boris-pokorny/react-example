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
import { PricesData, PriceChartProps } from "../types";

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

const chartOptions = {
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
      position: "right" as const,
    },
  },
  scales: {
    x: {
      type: "category" as const,
    },
    y: {
      type: "linear" as const,
      title: {
        display: true,
        text: "Price ($)",
      },
    },
  },
};

const LoadingState: React.FC<{ loading: boolean }> = ({ loading }) => (
  <Spinner loading={loading} />
);

const ErrorState: React.FC<{ error: string }> = ({ error }) => (
  <div>
    <h2> Error </h2> <div>{error}</div>
  </div>
);

const NoDataState: React.FC = () => <h2> No data </h2>;

const applyDatasetStyles = (chartData: PricesData): PricesData => {
  const styledData = { ...chartData };
  styledData.datasets = chartData.datasets.map((dataset, index) => ({
    ...dataset,
    fill: false,
    borderColor: colors[index % colors.length],
    borderWidth: 2,
  }));
  return styledData;
};

const hasValidData = (data: PricesData | {}): data is PricesData => {
  return 'datasets' in data && Array.isArray((data as PricesData).datasets);
};

const PriceChart: React.FC<PriceChartProps> = ({ data, loading, error }) => {
  if (loading) return <LoadingState loading={loading} />;
  if (error) return <ErrorState error={error} />;
  if (!hasValidData(data)) return <NoDataState />;

  const styledChartData = applyDatasetStyles(data);

  return (
    <div data-testid="price-chart">
      <Line data={styledChartData} options={chartOptions} />
    </div>
  );
};

export default PriceChart;
