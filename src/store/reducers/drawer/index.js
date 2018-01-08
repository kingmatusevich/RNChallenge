import Immutable from 'seamless-immutable';
import {Types} from '../../actions'; 
import { createReducer } from 'reduxsauce';
import { select } from 'redux-saga/effects';
const INITIAL_STATE = Immutable({ show: false });

export const toggleDrawer = (state = INITIAL_STATE, action) => {
  return { ...state, show: action.nextState != undefined ? action.nextState : !state.show }
};

export const logout = (state = INITIAL_STATE, action) => {
  return { ...state, show: false }
};

export const selectAPI = (state = INITIAL_STATE, action) => {
  return { ...state, show: false }
};

export const HANDLERS = {
  [Types.TOGGLE_DRAWER]: toggleDrawer,
  [Types.LOGOUT]: logout,
  [Types.SELECT_API]: selectAPI
}

export default createReducer(INITIAL_STATE, HANDLERS);