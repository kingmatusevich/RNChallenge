import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import {Types, Creators} from '../../actions';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import Dogs from './dogs';
export const getState = (state) => {
  console.log('base state', state);
  return state.api;
};

function* fetchItems(action) {
  console.log('saga started');
  let state = yield select(getState);
  console.log('saga called with state', state, 'and action', action);
  let {chosenAPI} = state;
  let API;
  switch(chosenAPI) {
    case 'dogs':
    API = Dogs;
    break;
    default:
    API = Dogs;
  }
  console.log('choseAPI', API);
  try {
     const items = yield API.getItems();
     console.log('items', items);
      yield put(Creators.fetchSuccess(items));
  } catch (e) {
     yield put(Creators.fetchError(e));
  }
}
/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
*/

export default function* saga() {
 yield takeLatest(Types.FETCH_ITEMS, fetchItems);
}