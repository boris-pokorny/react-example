import React from "react";
import ChartContainer from "../containers/ChartContainer";
import ChartHeader from "./ChartHeader";
import ErrorBoundary from "./ErrorBoundary";
import { styled } from "@mui/material/styles";

const AppContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(4),
}));

const App = () => {
  return (
    <AppContainer>
      <ErrorBoundary>
        <ChartHeader />
        <ChartContainer />
      </ErrorBoundary>
    </AppContainer>
  );
};

export default App;
