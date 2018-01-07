import { takeEvery, all, fork } from 'redux-saga/effects';
import authenticationSaga from './authentication';
import apis from './apis';
export default function *watchAll() {
  console.log('something');
  yield fork(apis);
  console.log('other');
  yield fork(authenticationSaga);
}