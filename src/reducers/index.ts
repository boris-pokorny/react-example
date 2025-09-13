import { combineReducers } from "redux";
import prices from "./prices";
import filter from "./filter";
import search from "./search";

export default combineReducers({
  filter,
  prices,
  search,
});
