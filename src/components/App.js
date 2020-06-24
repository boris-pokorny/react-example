import React from "react";
import ChartContainer from "../containers/ChartContainer";
import ChartHeader from "./ChartHeader";
import ErrorBoundary from "./ErrorBoundary";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    margin: theme.spacing(4),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <ErrorBoundary>
        <ChartHeader />
        <ChartContainer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
