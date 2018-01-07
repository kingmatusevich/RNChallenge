import Immutable from 'seamless-immutable';
import {Types} from '../../actions'; 
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = Immutable({ 
  items: [], 
  chosenAPI: 'dogs', 
  loading: false, 
  currentItem: null, 
  error: null,
  currentItemId: null 
});

export const selectAPI = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    error: false, 
    chosenAPI: action.apiName, 
    items: [], 
    currentItem: null, 
    loading: true,
    currentItemId: null
   }
}

export const fetchItems = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    error: false, 
    loading: true, 
    items: [], 
    currentItem: null,
    currentItemId: null
  }
}

export const fetchSpecificItem = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    error: false, 
    loading: true, 
    currentItem: null,  
    currentItemId: action.itemId
  }
}

export const fetchError = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    error: action.error, 
    loading: false, 
    currentItem: null 
  }
}

export const fetchSuccess = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    error: null,
    loading: false, 
    items: action.items
  }
}

export const currentFetchSuccess = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    error: null, 
    loading: false, 
    currentItem: action.item
  }
}


export const HANDLERS = {
  [Types.SELECT_API]: selectAPI,
  [Types.FETCH_ITEMS]: fetchItems,
  [Types.FETCH_SPECIFIC_ITEM]: fetchSpecificItem,
  [Types.FETCH_ERROR]: fetchError,
  [Types.NAVIGATE_DETAIL]: fetchSpecificItem,
  [Types.FETCH_SUCCESS]: fetchSuccess,
  [Types.CURRENT_FETCH_SUCCESS]: currentFetchSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS)