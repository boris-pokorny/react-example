import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Spinner = ({ loading }) => {
  const override = `
    display: block;
    margin: 0 auto;
    margin-top: 20vh;
    `;
  return (
    <div data-testid="spinner">
      <ClockLoader
        css={override}
        size={200}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;
