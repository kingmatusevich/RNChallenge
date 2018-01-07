import Immutable from 'seamless-immutable';
import {Types} from '../../actions'; 
import { createReducer } from 'reduxsauce';


const INITIAL_STATE = Immutable({ isLoggedIn: false, username: '', loading: false, error: null });

export const loginAttempt = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, loading: true, username: action.username, isLoggedIn: false }
}

export const loginSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, loading: false, isLoggedIn: true }
}

export const logout = (state = INITIAL_STATE, action) => {
  return { ...INITIAL_STATE }
}

export const loginFailure = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.payload.error, loading: false, isLoggedIn: false }
}

export const HANDLERS = {
  [Types.LOGIN_ATTEMPT]: loginAttempt,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, HANDLERS);