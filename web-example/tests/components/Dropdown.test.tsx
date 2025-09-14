import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "../../src/components/Dropdown";

const options = [
  {
    key: "A",
    value: "A",
  },
  {
    key: "B",
    value: "B",
  },
];

test("renders", () => {
  let value = "";
  const { getByLabelText } = render(
    <Dropdown
      value={value}
      handleChange={(e) => {
        value = e.target.value;
      }}
      options={options}
      placeholder="Placeholder"
    />
  );
  expect(getByLabelText(/Placeholder/)).toBeInTheDocument();
});
