const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getDiagnosDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DIAGNOS_DETAILS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_DIAGNOS_DETAILS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_DIAGNOS_DETAILS_FAILURE':
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
