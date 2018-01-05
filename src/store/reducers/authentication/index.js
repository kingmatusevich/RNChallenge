import Immutable from 'seamless-immutable';
import {Types} from '../../actions'; 
import { createReducer } from 'reduxsauce';
const INITIAL_STATE = Immutable({ isLoggedIn: false, loading: false, error: null });

export const loginAttempt = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, loading: true }
}

export const loginSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, loading: true }
}

export const loginFailure = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.payload.error, loading: false }
}

export const HANDLERS = {
  [Types.LOGIN_ATTEMPT]: loginAttempt,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGIN_SUCCESS]: loginSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS)