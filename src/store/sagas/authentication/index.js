import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import {Types, Creators} from '../../actions';


const API = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 5000);
  })
}

function* fetchUser(action) {
  console.log('saga called');
  try {
     const loginAttempt = yield API();
    if (!!loginAttempt) {
      yield put(Creators.loginSuccess());
      yield put(Creators.fetchItems());
    } else {
      yield put(Creators.loginFailure());
    }
  } catch (e) {
     yield put(Creators.loginFailure(e));
  }
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
*/
function* saga() {
 yield takeLatest(Types.LOGIN_ATTEMPT, fetchUser);
}

export default function* completeSaga() {
  yield fork(saga);
}

