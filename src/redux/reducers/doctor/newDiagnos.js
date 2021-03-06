const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newDiagnosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DIAGNOS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_DIAGNOS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_DIAGNOS_FAILURE':
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
