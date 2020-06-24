import React from "react";
import Reload from "../containers/Reload";
import SelectSymbol from "../containers/SelectSymbol";
import SelectPeriod from "../containers/SelectPeriod";

const ChartHeader = () => (
  <div
    style={{ display: "flex", flexDirection: "row" }}
    data-testid="chart-header"
  >
    <SelectSymbol />
    <SelectPeriod />
    <Reload />
  </div>
);

export default ChartHeader;
