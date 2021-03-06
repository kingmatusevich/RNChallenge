import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginAttempt: ['username', 'password'],
  loginSuccess: null,
  loginFailure: ['error'],
  logout: null,
  navigateHome: null,
  navigateDetail: ['itemId', 'name'],
  navigateFeed: null,
  toggleDrawer: ['nextState'],
  selectApi: ['apiName'],
  fetchItems: null,
  fetchSuccess: ['items'],
  currentFetchSuccess: ['item'],
  fetchError: ['error'],
  fetchSpecificItem: ['itemId'],
  favoriteAdd: ['favoriteId'],
  favoriteRemove: ['favoriteId']
}, {}); // options - the 2nd parameter is optional
