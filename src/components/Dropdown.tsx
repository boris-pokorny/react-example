import React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownOption } from '../types';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}));

interface DropdownProps {
  placeholder: string;
  value: string;
  options: DropdownOption[];
  handleChange: (event: SelectChangeEvent) => void;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <div>
      <StyledFormControl>
        <InputLabel id="demo-simple-select-label">{props.placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          onChange={(event) => props.handleChange(event)}
        >
            {props.options.map((option: DropdownOption) =>
                <MenuItem key={option.key} value={option.key}>
                    {option.value}
                </MenuItem>
            )}
        </Select>
      </StyledFormControl>
    </div>
    );
  }

export default Dropdown