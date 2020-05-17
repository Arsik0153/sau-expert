const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newCriticalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_CRITICAL_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_CRITICAL_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_CRITICAL_FAILURE':
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
