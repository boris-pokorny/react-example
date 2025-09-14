import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  const override = `
    display: block;
    margin: 0 auto;
    margin-top: 20vh;
    `;
  return (
    <div data-testid="spinner">
      <ClockLoader
        cssOverride={{ display: 'block', margin: '0 auto', marginTop: '20vh' }}
        size={200}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;
