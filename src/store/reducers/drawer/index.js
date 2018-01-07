import Immutable from 'seamless-immutable';
import {Types} from '../../actions'; 
import { createReducer } from 'reduxsauce';
const INITIAL_STATE = Immutable({ show: false });

export const toggleDrawer = (state = INITIAL_STATE, action) => {
  return { ...state, show: action.nextState != undefined ? action.nextState : !state.show }
};

export const HANDLERS = {
  [Types.TOGGLE_DRAWER]: toggleDrawer
}

export default createReducer(INITIAL_STATE, HANDLERS);