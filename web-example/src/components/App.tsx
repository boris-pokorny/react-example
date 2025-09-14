import React from "react";
import { connect } from "react-redux";
import ChartContainer from "../containers/ChartContainer";
import ChartHeader from "./ChartHeader";
import ErrorBoundary from "./ErrorBoundary";
import { styled } from "@mui/material/styles";
import { fetchSymbols } from "../actions";
import { Dispatch } from "redux";

const AppContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(4),
}));

interface AppProps {
  dispatch: Dispatch;
}

const App: React.FC<AppProps> = ({ dispatch }) => {
  React.useEffect(() => {
    // Fetch symbols on app startup
    dispatch(fetchSymbols());
  }, [dispatch]);

  return (
    <AppContainer>
      <ErrorBoundary>
        <ChartHeader />
        <ChartContainer />
      </ErrorBoundary>
    </AppContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(App);
