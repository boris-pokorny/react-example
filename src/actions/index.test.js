import * as actions from './index'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to fetch prices', () => {
    const id = 'Finish docs'
    const expectedAction = {
      type: types.FETCH_PRICES,
      id
    }
    expect(actions.fetchPrices(id)).toEqual(expectedAction)
  })
})