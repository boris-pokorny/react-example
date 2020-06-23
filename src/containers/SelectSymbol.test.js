import React from "react";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as types from "../constants/ActionTypes";
import SelectSymbol from "./SelectSymbol";
import { act } from "react-dom/test-utils";

const mockStore = configureMockStore();

configure({ adapter: new Adapter() });

describe("SelectSymbol", () => {
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
        <SelectSymbol />
      </Provider>
    );

    component = render(content);
    wrapper = mount(content);
  });

  it("should render with given state from Redux store", () => {
    expect(component).toMatchSnapshot("dropdown-symbol");
    expect(component.getByText("Symbol")).toBeInTheDocument();
  });

  it("should dispatch an action on button click", () => {
    const form = wrapper.find("Dropdown");

    act(() => {
      form.props().handleChange({
        target: {
          value: "DOW",
        },
      });
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      value: "DOW",
      type: types.SYMBOL_SELECTED,
    });
  });
});
