const initialState = {
  status: '',
  key: '',
  error: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        key: action.payload,
      }
    case 'REGISTER_FAILURE':
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
