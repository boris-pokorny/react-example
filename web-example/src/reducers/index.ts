import { combineReducers } from "redux";
import prices from "./prices";
import filter from "./filter";
import search from "./search";
import symbols from "./symbols";

export default combineReducers({
  filter,
  prices,
  search,
  symbols,
});
