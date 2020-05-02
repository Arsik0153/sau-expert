const initialState = {
  status: '',
  token: '',
  error: null,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        token: action.payload,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
