// @flow

import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import Immutable from 'seamless-immutable';
import {Types} from '../../actions'; 
import { AppNavigator } from '../../../navigators/AppNavigator';
import { createReducer } from 'reduxsauce';
// Start with two routes: The Feed screen, with the Home screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Feed');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const INITIAL_STATE = initialNavState;

export const loginSuccess = (state = INITIAL_STATE, action) => {
  return AppNavigator.router.getStateForAction(
    NavigationActions.back(),
    state
  );
}

export const logout = (state = INITIAL_STATE, action) => {
  return AppNavigator.router.getStateForAction(
    NavigationActions.navigate({ routeName: 'Home' }),
    state
  );
}

export const navigateFeed = loginSuccess;

export const navigateDetail = (state = INITIAL_STATE, action) => {
  return AppNavigator.router.getStateForAction(
    NavigationActions.navigate({routeName: "Detail", params: {itemId: action.itemId}}),
    state
  );
}

export const navigateBack = (state = INITIAL_STATE, action) => {
  if (state.routes.some(e => e.routeName == "Home")) {
    return state;
  }
  return AppNavigator.router.getStateForAction(
    NavigationActions.back(),
    state
  );
}

// function navigationReducer(state = initialNavState, action) {
//   let nextState;
//   switch (action.type) {
//     case TYPES.LOGIN:
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case TYPES.LOGOUT:
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Home' }),
//         state
//       );
//       break;
//     case TYPES.NAVIGATE_FEED: 
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case TYPES.NAVIGATE_DETAIL: 
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({routeName: "Detail"})
//       )
//       break;
//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

export const HANDLERS = {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.NAVIGATE_DETAIL]: navigateDetail,
  [Types.NAVIGATE_FEED]: navigateFeed,
  "Navigation/BACK": navigateBack
}

//const initialAuthState = { isLoggedIn: false };

// function authentication(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true };
//     case 'Logout':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// }
export default createReducer(INITIAL_STATE, HANDLERS);