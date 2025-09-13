import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import { connect } from "react-redux";
import { fetchPrices } from "../actions";
import { Dispatch } from "redux";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

interface ReloadProps {
  dispatch: Dispatch;
}

const Reload: React.FC<ReloadProps> = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          dispatch(fetchPrices(""));
        }}
      >
        <StyledButton
          id="reload-button"
          type="submit"
          variant="contained"
          color="inherit"
          startIcon={<RefreshIcon />}
        >
          Reload
        </StyledButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(Reload);
