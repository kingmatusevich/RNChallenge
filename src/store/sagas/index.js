import { takeEvery, all, fork } from 'redux-saga/effects';
import authenticationSaga from './authentication';
export default function *watchAll() {
  console.log('something');
  yield fork(authenticationSaga);
}