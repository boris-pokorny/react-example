import React from "react";
import { periodSelected } from "../actions";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";
import { periodOptions } from "../constants/DropdownOptions";
import { Dispatch } from "redux";
import { SelectChangeEvent } from "@mui/material/Select";

interface SelectPeriodProps {
  dispatch: Dispatch;
}

const SelectPeriod: React.FC<SelectPeriodProps> = ({ dispatch }) => {
  const [period, setPeriod] = React.useState(periodOptions[0].key);

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
    dispatch(periodSelected(event.target.value));
  };

  return (
    <Dropdown
      value={period}
      handleChange={handleChange}
      options={periodOptions}
      placeholder="Period"
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(SelectPeriod);
