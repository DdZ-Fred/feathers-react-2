import { CREATE_USER,
  LOGIN_USER,
  UPDATE_USER,
  PATCH_USER,
  DELETE_USER,
  LOGOUT_USER,
} from 'actions/userActions';

export default function (state = null, action) {
  switch (action.type) {
    case CREATE_USER: {
      if (action.payload.status === 'error') {
        console.log('CREATE_USER: Error', action.payload);

        // Do something with error
      } else {
        
      }

      return state;
    }
    case LOGIN_USER: {
      // Get payload with Current User
      return action.payload;
    }
    case UPDATE_USER: {
      return state;
    }
    case PATCH_USER: {
      return state;
    }
    case DELETE_USER: {
      return state;
    }
    case LOGOUT_USER: {
      return null;
    }
    default: {
      return state;
    }
  }
}
