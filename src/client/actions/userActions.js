export const CREATE_USER_REQUESTED = 'CREATE_USER_REQUESTED';
export const CREATE_USER_IN_PROGRESS = 'CREATE_USER_IN_PROGRESS';
export const CREATE_USER_SUCCEEDED = 'CREATE_USER_SUCCEEDED';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';

export const UPDATE_USER_REQUESTED = 'UPDATE_USER_REQUESTED';
export const UPDATE_USER_IN_PROGRESS = 'UPDATE_USER_IN_PROGRESS';
export const UPDATE_USER_SUCCEEDED = 'UPDATE_USER_SUCCEEDED';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const PATCH_USER_REQUESTED = 'PATCH_USER_REQUESTED';
export const PATCH_USER_IN_PROGRESS = 'PATCH_USER_IN_PROGRESS';
export const PATCH_USER_SUCCEEDED = 'PATCH_USER_SUCCEEDED';
export const PATCH_USER_FAILED = 'PATCH_USER_FAILED';

export const DELETE_USER_REQUESTED = 'DELETE_USER_REQUESTED';
export const DELETE_USER_IN_PROGRESS = 'DELETE_USER_IN_PROGRESS';
export const DELETE_USER_SUCCEEDED = 'DELETE_USER_SUCCEEDED';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';


export function createUser(user) {
  return {
    type: CREATE_USER_REQUESTED,
    payload: {
      data: user,
    },
  };
}

export function updateUser(userId, updatedUser) {
  return {
    type: UPDATE_USER_REQUESTED,
    payload: {
      id: userId,
      data: updatedUser,
    },
  };
}

export function patchUser(userId, partialUser) {
  return {
    type: PATCH_USER_REQUESTED,
    payload: {
      id: userId,
      data: partialUser,
    },
  };
}

export function deleteUser(userId) {
  return {
    type: DELETE_USER_REQUESTED,
    payload: {
      id: userId,
    },
  };
}
