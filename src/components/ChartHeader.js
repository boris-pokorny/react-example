import React from "react";
import Reload from "../containers/Reload";
import SelectSymbol from "../containers/SelectSymbol";
import SelectPeriod from "../containers/SelectPeriod";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  chartHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "10px",
    width: "50vw",
  },
}));

const ChartHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.chartHeader} data-testid="chart-header">
      <SelectSymbol />
      <SelectPeriod />
      <Reload />
    </div>
  );
};

export default ChartHeader;
