import React from "react";
import ChartContainer from "../containers/ChartContainer";
import ChartHeader from "./ChartHeader";
import ErrorBoundary from "./ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <ChartHeader />
    <ChartContainer />
  </ErrorBoundary>
);

export default App;
