import React from "react";
import { symbolSelected } from "../actions";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";

const SelectSymbol = ({ dispatch }) => {
  const [symbol, setSymbol] = React.useState("");
  const options = [
    {
      key: "DOW",
      value: "DOW",
    },
  ];

  const handleChange = (event) => {
    setSymbol(event.target.value);
    dispatch(symbolSelected(event.target.value));
  };

  return (
    <Dropdown
      value={symbol}
      handleChange={(e) => handleChange(e)}
      options={options}
      placeholder="Symbol"
    />
  );
};

export default connect()(SelectSymbol);
