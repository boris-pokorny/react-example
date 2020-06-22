import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Spinner = ({ loading }) => {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
  return (
    <div className="sweet-loading">
      <ClockLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;
