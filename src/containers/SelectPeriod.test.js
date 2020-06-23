import React from "react";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as types from "../constants/ActionTypes";
import SelectPeriod from "./SelectPeriod";
import { act } from "react-dom/test-utils";

const mockStore = configureMockStore();

configure({ adapter: new Adapter() });

describe("SelectPeriod", () => {
  let store;
  let component;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      prices: {
        data: {},
      },
    });

    jest.spyOn(store, "dispatch");

    const content = (
      <Provider store={store}>
        <SelectPeriod />
      </Provider>
    );

    component = render(content);
    wrapper = mount(content);
  });

  it("should render with given state from Redux store", () => {
    expect(component).toMatchSnapshot();
    expect(component.getByText("Period")).toBeInTheDocument();
  });

  it("should dispatch an action on button click", () => {
    const form = wrapper.find("Dropdown");
    act(() => {
      form.props().handleChange({
        target: {
          value: "TIME_SERIES_WEEKLY",
        },
      });
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      value: "TIME_SERIES_WEEKLY",
      type: types.PERIOD_SELECTED,
    });
  });
});
