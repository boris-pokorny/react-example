import React from "react";
import { symbolSelected, searchSymbol } from "../actions";
import { connect } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RootState, SearchState, DropdownOption } from "../types";
import { Dispatch } from "redux";

function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    const later = () => {
      timeout = null!;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }) as T;
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

  return (
    <Autocomplete
      id="select-symbol"
      options={options}
      getOptionLabel={(option) => option.value}
      style={{ width: '100%' }}
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
