import React from "react";
import { symbolSelected, searchSymbol } from "../actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const SelectSymbol = ({ dispatch, options }) => {
  const [symbol, setSymbol] = React.useState({ value: "" });
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event, newValue) => {
    if (!newValue) {
      return;
    }
    setSymbol(newValue);
    dispatch(symbolSelected(newValue.key));
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (!newInputValue) {
      return;
    }
    dispatch(searchSymbol(newInputValue));
  };

  return (
    <Autocomplete
      id="select-symbol"
      options={options}
      getOptionLabel={(option) => option.value}
      style={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Symbol" variant="outlined" />
      )}
      value={symbol}
      inputValue={inputValue}
      onInputChange={debounce(handleInputChange, 100)}
      onChange={handleChange}
      noOptionsText="Please start typing"
      getOptionSelected={(option, value) => option.key === value.key}
    />
  );
};

const mapStateToProps = (state) => {
  return state.search;
};

export default connect(mapStateToProps, null)(SelectSymbol);
