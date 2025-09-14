import SelectSymbol from "../containers/SelectSymbol";
import SelectPeriod from "../containers/SelectPeriod";
import { Grid } from "@mui/material";

const ChartHeader = () => {
  return (
    <Grid
      container
      spacing={1.25}
      data-testid="chart-header"
    >
      <Grid size={2}>
        <SelectSymbol />
      </Grid>
      <Grid size={2}>
        <SelectPeriod />
      </Grid>
    </Grid>
  );
};

export default ChartHeader;
