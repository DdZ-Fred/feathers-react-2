import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const PATCH_USER = 'PATCH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const DELETE_USER = 'DELETE_USER';

const CONFIG = {
  baseURL: 'http://localhost:3030',
};


export function createUser(user) {
  const request = axios.post('/users', user, CONFIG);

  return {
    type: CREATE_USER,
    payload: request,
  };
}

export function loginUser(userCredentials) {
  return {
    type: LOGIN_USER,
    userCredentials,
  };
}

export function updateUser(updatedUser) {
  return {
    type: UPDATE_USER,
    updatedUser,
  };
}

export function patchUser(partialUser) {
  return {
    type: PATCH_USER,
    partialUser,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function deleteUser(userId) {
  return {
    type: DELETE_USER,
  };
}
