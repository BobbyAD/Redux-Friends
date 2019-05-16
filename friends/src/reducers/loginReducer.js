import { LOGIN_START, 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
 } from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    isLoggingIn: false,
    error: ''
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_START:
        return { 
            ...state, 
            isLoggingIn: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        return { 
            ...state,
            isLoggingIn: false
         }
    case LOGIN_FAILURE:
        return { 
            ...state,
            isLoggingIn: false,
            error: action.payload
         }
    case FETCH_FRIENDS_START:
        return { 
            ...state,
            isFetching: true,
            error: ''
         }
    case FETCH_FRIENDS_SUCCESS:
        return { 
            ...state,
            isFetching: false,
            error: '',
            friends: action.payload
         }
    case FETCH_FRIENDS_FAILURE:
        return { 
            ...state,
            isFetching: false,
            error: action.payload
         }

    default:
        return state
    }
}