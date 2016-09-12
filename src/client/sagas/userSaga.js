import { takeEvery, takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import {
  CREATE_USER_REQUESTED, CREATE_USER_IN_PROGRESS, CREATE_USER_SUCCEEDED, CREATE_USER_FAILED,
  UPDATE_USER_REQUESTED, UPDATE_USER_IN_PROGRESS, UPDATE_USER_SUCCEEDED, UPDATE_USER_FAILED,
  PATCH_USER_REQUESTED, PATCH_USER_IN_PROGRESS, PATCH_USER_SUCCEEDED, PATCH_USER_FAILED,
  DELETE_USER_REQUESTED, DELETE_USER_IN_PROGRESS, DELETE_USER_SUCCEEDED, DELETE_USER_FAILED,
 } from 'actions/userActions';
import userApi from 'apis/userApi';

function* createUser(action) {
  try {
    yield put({ type: CREATE_USER_IN_PROGRESS });
    const user = yield call(userApi.createUserReq, action.payload);
    yield put({ type: CREATE_USER_SUCCEEDED, payload: user });
  } catch (error) {
    yield put({ type: CREATE_USER_FAILED, error });
  }
}

export default function* () {
  yield fork(takeEvery, CREATE_USER_REQUESTED, createUser);
}
