import React from "react";
import { periodSelected } from "../actions";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";
import { Dispatch } from "redux";
import { SelectChangeEvent } from "@mui/material/Select";
import { RootState } from "../types";

interface SelectPeriodProps {
  dispatch: Dispatch;
  selectedSymbol: string;
  symbolsData: { [key: string]: string[] };
}

const SelectPeriod: React.FC<SelectPeriodProps> = ({ dispatch, selectedSymbol, symbolsData }) => {
  const [period, setPeriod] = React.useState("");

  // Get available periods for selected symbol
  const availablePeriods = selectedSymbol && symbolsData[selectedSymbol]
    ? symbolsData[selectedSymbol]
    : [];

  // Create period options from available periods
  const periodOptions = availablePeriods.map(period => {
    const displayMap: { [key: string]: string } = {
      'day': 'Daily',
      'hour': 'Hourly',
      'week': 'Weekly',
      'month': 'Monthly'
    };

    return {
      key: period,
      value: displayMap[period] || period.charAt(0).toUpperCase() + period.slice(1)
    };
  });

  React.useEffect(() => {
    // Set default period when symbol changes or periods are loaded
    if (periodOptions.length > 0 && !period) {
      const defaultPeriod = periodOptions[0].key;
      setPeriod(defaultPeriod);
      dispatch(periodSelected(defaultPeriod));
    }
  }, [selectedSymbol, availablePeriods.length, period, dispatch, periodOptions]);

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
    dispatch(periodSelected(event.target.value));
  };

  if (!selectedSymbol || periodOptions.length === 0) {
    return (
      <Dropdown
        value=""
        handleChange={() => {}}
        options={[]}
        placeholder="Select symbol first"
      />
    );
  }

  return (
    <Dropdown
      value={period}
      handleChange={handleChange}
      options={periodOptions}
      placeholder="Period"
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedSymbol: state.filter.symbol,
  symbolsData: state.symbols.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);
