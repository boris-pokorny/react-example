import React from "react";
import { periodSelected } from "../actions";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";

const SelectSymbol = ({ dispatch }) => {
  const [symbol, setSymbol] = React.useState("");
  const options = [
    {
      key: "TIME_SERIES_WEEKLY",
      value: "Weekly",
    },
    {
      key: "TIME_SERIES_MONTHLY",
      value: "Monthly",
    },
  ];

  const handleChange = (event) => {
    setSymbol(event.target.value);
    dispatch(periodSelected(event.target.value));
  };

  return (
    <Dropdown
      value={symbol}
      handleChange={(e) => handleChange(e)}
      options={options}
      placeholder="Period"
    />
  );
};

export default connect()(SelectSymbol);
