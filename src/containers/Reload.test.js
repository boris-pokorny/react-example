import React from "react";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mount, configure } from "enzyme";
import Reload from "./Reload";
import Adapter from "enzyme-adapter-react-16";
import * as types from "../constants/ActionTypes";

const mockStore = configureMockStore();

configure({ adapter: new Adapter() });

describe("Reload", () => {
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
        <Reload />
      </Provider>
    );

    component = render(content);
    wrapper = mount(content);
  });

  it("should render with given state from Redux store", () => {
    expect(component).toMatchSnapshot("reload-button");
    expect(component.getByText("Reload")).toBeInTheDocument();
  });

  it("should dispatch an action on button click", () => {

    const form = wrapper.find("form");

    form.props().onSubmit(new Event({}));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
        id: undefined,
        type: types.FETCH_PRICES
    });
  });
});
