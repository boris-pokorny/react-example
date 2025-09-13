import * as types from "../constants/ActionTypes";

export const fetchPrices = (id: string) => ({
  type: types.FETCH_PRICES,
  id
})

export const pricesFetched = (id: string) => ({
  type: types.PRICES_FETCHED,
  id
})

export const symbolSelected = (value: string) => ({
  type: types.SYMBOL_SELECTED,
  value
})

export const periodSelected = (value: string) => ({
  type: types.PERIOD_SELECTED,
  value
})

export const searchSymbol = (searchTerm: string) => ({
  type: types.SEARCH_SYMBOL,
  searchTerm
})

export const symbolFound = () => ({
  type: types.SYMBOL_FOUND,
})
