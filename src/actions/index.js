import * as types from "../constants/ActionTypes";

export const fetchPrices = id => ({
  type: types.FETCH_PRICES,
  id
})

export const pricesFetched = id => ({
  type: types.PRICES_FETCHED,
  id
})

export const symbolSelected = value => ({
  type: types.SYMBOL_SELECTED,
  value
})

export const periodSelected = value => ({
  type: types.PERIOD_SELECTED,
  value
})

export const searchSymbol = searchTerm => ({
  type: types.SEARCH_SYMBOL,
  searchTerm
})

export const symbolFound = () => ({
  type: types.SYMBOL_FOUND,
})
