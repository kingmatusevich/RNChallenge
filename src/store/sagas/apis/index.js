import { call, put, takeEvery, takeLatest, select, fork } from 'redux-saga/effects';
import {Types, Creators} from '../../actions';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import Dogs from './dogs';
import Beers from './beers';
export const getState = (state) => {
  console.log('base state', state);
  return state.api;
};

const APIs = {dogs: Dogs, beers: Beers};

function* fetchItems(action) {
  console.log('saga started');
  let state = yield select(getState);
  console.log('saga called with state', state, 'and action', action);
  let {chosenAPI} = state;
  console.log('chosenAPI', chosenAPI);
  let API = APIs[chosenAPI];
  console.log('choseAPI', API);
  try {
     const items = yield API.getItems();
     console.log('items', items);
      yield put(Creators.fetchSuccess(items));
  } catch (e) {
     yield put(Creators.fetchError(e));
  }
}

function* fetchCurrentItem(action) {
  console.log('current item started');
  let state = yield select(getState);
  console.log('saga called with state', state, 'and action', action);
  let {chosenAPI} = state;
  let API = APIs[chosenAPI];
  console.log('choseAPI', API);
  try {
     const items = yield API.getItem(action.itemId);
     console.log('items', items);
      yield put(Creators.currentFetchSuccess(items));
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

export function* specificItemSaga() {
  yield takeLatest([Types.FETCH_SPECIFIC_ITEM,Types.NAVIGATE_DETAIL], fetchCurrentItem);
 }

export function* itemsSaga() {
  yield takeLatest([Types.FETCH_ITEMS, Types.SELECT_API, "persist/REHYDRATE"], fetchItems);
 }

export default function* saga() {
 yield fork(specificItemSaga);
 yield fork(itemsSaga);
}