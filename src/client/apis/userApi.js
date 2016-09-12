import axios from 'axios';

const CONFIG = {
  baseURL: 'http://localhost:3030',
};

export function createUserReq({ data }) {
  return axios.post('/users', data, CONFIG);
}

export function updateUserReq({ id, data }) {
  return axios.put(`/users/${id}`, data, CONFIG);
}

export function patchUserReq({ id, data }) {
  return axios.patch(`/users/${id}`, data, CONFIG);
}

// Review axios API for DELETE requests
export function deleteUserReq({ id }) {
  return axios.delete(`/users/${id}`, null, CONFIG);
}
