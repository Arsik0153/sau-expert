const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getManagersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MANAGERS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_MANAGERS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_MANAGERS_FAILURE':
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
