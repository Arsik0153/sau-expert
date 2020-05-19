const initialState = {
  status: '',
  info: {},
  error: null,
}

export const deleteDiagnosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_DIAGNOS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'DELETE_DIAGNOS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'DELETE_DIAGNOS_FAILURE':
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
