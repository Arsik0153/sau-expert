const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getAnketaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ANKETA_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_ANKETA_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_ANKETA_FAILURE':
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
