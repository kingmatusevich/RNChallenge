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

export const rehydrate = (state = INITIAL_STATE, action) => {
  if (action.key == "authentication" && !!action.payload && !!action.payload.username && !!action.payload.isLoggedIn)
  return AppNavigator.router.getStateForAction(
    NavigationActions.back(),
    state
  )
  return {...state};
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
    NavigationActions.navigate({routeName: "Detail", params: {title: action.name || action.itemId, itemId:action.itemId}}),
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

export const navigateSetParams = (state = INITIAL_STATE, action) => {
  console.log('setparams reducer', action);
  let toDO = NavigationActions.setParams(action.params);
  console.log('action', toDO);
  return AppNavigator.router.getStateForAction(
    action,
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
  [Types.LOGOUT]: logout,
  [Types.NAVIGATE_DETAIL]: navigateDetail,
  [Types.NAVIGATE_FEED]: navigateFeed,
  "Navigation/BACK": navigateBack,
  "Navigation/SET_PARAMS": navigateSetParams,
  "persist/REHYDRATE": rehydrate
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