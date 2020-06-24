import React from "react";
import { periodSelected } from "../actions";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";
import { periodOptions } from "../constants/DropdownOptions";

const SelectSymbol = ({ dispatch }) => {
  const [symbol, setSymbol] = React.useState(periodOptions[0].key);

  const handleChange = (event) => {
    setSymbol(event.target.value);
    dispatch(periodSelected(event.target.value));
  };

  return (
    <Dropdown
      value={symbol}
      handleChange={(e) => handleChange(e)}
      options={periodOptions}
      placeholder="Period"
    />
  );
};

export default connect()(SelectSymbol);
