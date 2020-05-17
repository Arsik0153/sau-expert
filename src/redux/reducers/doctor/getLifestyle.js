const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getLifestyleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIFESTYLE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_LIFESTYLE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_LIFESTYLE_FAILURE':
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
