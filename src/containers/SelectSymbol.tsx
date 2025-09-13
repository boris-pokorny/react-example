import React from "react";
import { symbolSelected, searchSymbol } from "../actions";
import { connect } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RootState, SearchState, DropdownOption } from "../types";
import { Dispatch } from "redux";

function debounce(func: Function, wait: number): Function {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    const context = this;
    const later = function () {
      timeout = null!;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

interface SelectSymbolProps extends SearchState {
  dispatch: Dispatch;
}

const SelectSymbol: React.FC<SelectSymbolProps> = ({ dispatch, options }) => {
  const [symbol, setSymbol] = React.useState<DropdownOption | null>(null);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event: any, newValue: DropdownOption | null) => {
    if (!newValue) {
      return;
    }
    setSymbol(newValue);
    dispatch(symbolSelected(newValue.key));
  };

  const handleInputChange = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);
    if (!newInputValue) {
      return;
    }
    dispatch(searchSymbol(newInputValue));
  };

  const optionsArray = Array.isArray(options) ? options : [];

  return (
    <Autocomplete
      id="select-symbol"
      options={optionsArray}
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
      isOptionEqualToValue={(option, value) => option.key === value.key}
    />
  );
};

const mapStateToProps = (state: RootState) => {
  return state.search;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSymbol);
