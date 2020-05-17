const initialState = {
  status: '',
  info: {},
  error: null,
}

export const setLifestyleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIFESTYLE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'SET_LIFESTYLE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'SET_LIFESTYLE_FAILURE':
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
