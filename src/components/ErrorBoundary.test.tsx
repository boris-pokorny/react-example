import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const Something = () => null;

configure({ adapter: new Adapter() });

describe("ErrorBoundary", () => {
  it("should display an ErrorMessage if wrapped component throws", () => {
    const wrapper = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>
    );

    const error = new Error("test");

    wrapper.find(Something).simulateError(error);

    expect(wrapper.text()).toEqual("OOOps :(");
  });
});
