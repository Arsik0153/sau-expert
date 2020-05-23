const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_HISTORY_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_HISTORY_FAILURE':
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
