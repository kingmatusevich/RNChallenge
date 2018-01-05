import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginAttempt: null,
  loginSuccess: null,
  loginFailure: ['error'],
  logout: null,
  navigateHome: null,
  navigateDetail: ['id'],
  navigateFeed: null
}, {}); // options - the 2nd parameter is optional

console.log(Creators);