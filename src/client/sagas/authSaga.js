import { takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { LOGIN_USER, LOGOUT_USER } from 'actions/authActions';

function* loginUser(action) {
  console.log('LOGIN_USER_SAGA');
}

function* logoutUser() {
  console.log('LOGOUT_USER_SAGA');
}

export default function* authSaga() {
  yield fork(takeLatest, LOGIN_USER, loginUser);
  yield fork(takeLatest, LOGOUT_USER, logoutUser);
}
