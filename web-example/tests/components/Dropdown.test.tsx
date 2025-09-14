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
  const { getByText } = render(
    <Dropdown
      value={value}
      handleChange={(e) => {
        setValue(event.target.value);
      }}
      options={options}
      placeholder="Placeholder"
    />
  );
  expect(getByText(/Placeholder/)).toBeInTheDocument();
});
