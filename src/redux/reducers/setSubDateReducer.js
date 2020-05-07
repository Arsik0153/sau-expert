const initialState = {
  status: '',
  info: {},
  error: null,
}

export const setSubDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBDATE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'SET_SUBDATE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'SET_SUBDATE_FAILURE':
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
