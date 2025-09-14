import React from "react";
import Reload from "../containers/Reload";
import SelectSymbol from "../containers/SelectSymbol";
import SelectPeriod from "../containers/SelectPeriod";
import { styled } from "@mui/material/styles";

const ChartHeaderContainer = styled('div')({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "10px",
  width: "50vw",
});

const ChartHeader = () => {
  return (
    <ChartHeaderContainer data-testid="chart-header">
      <SelectSymbol />
      <SelectPeriod />
      <Reload />
    </ChartHeaderContainer>
  );
};

export default ChartHeader;
