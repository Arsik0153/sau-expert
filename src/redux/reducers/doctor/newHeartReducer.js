const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newHeartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_HEART_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_HEART_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_HEART_FAILURE':
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
