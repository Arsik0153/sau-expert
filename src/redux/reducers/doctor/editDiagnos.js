const initialState = {
  status: '',
  info: {},
  error: null,
}

export const editDiagnosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_DIAGNOS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'EDIT_DIAGNOS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'EDIT_DIAGNOS_FAILURE':
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
