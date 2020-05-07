const initialState = {
  status: '',
  info: {},
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_USER_INFO_FAILURE':
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
