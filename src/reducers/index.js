import { combineReducers } from "redux";
import prices from "./prices";
import filter from "./filter";

export default combineReducers({
  filter,
  prices,
});
