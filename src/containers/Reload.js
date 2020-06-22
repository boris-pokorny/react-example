import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import { connect } from "react-redux";
import { fetchPrices } from "../actions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Reload = ({ dispatch }) => {
  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchPrices());
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<RefreshIcon />}
        >
          Reload
        </Button>
      </form>
    </div>
  );
};

export default connect()(Reload);
