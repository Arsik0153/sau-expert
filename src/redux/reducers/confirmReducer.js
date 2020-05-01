const initialState = {
  status: '',
  token: '',
  error: null,
}

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONFIRMSTARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'CONFIRM_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        token: action.payload,
      }
    case 'CONFIRM_FAILURE':
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
