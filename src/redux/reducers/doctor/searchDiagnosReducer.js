const initialState = {
  status: '',
  info: {},
  error: null,
}

export const searchDiagnosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_DIAGNOS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'SEARCH_DIAGNOS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'SEARCH_DIAGNOS_FAILURE':
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
