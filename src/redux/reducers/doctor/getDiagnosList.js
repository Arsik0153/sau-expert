const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getDiagnosListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DIAGNOS_LIST_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_DIAGNOS_LIST_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_DIAGNOS_LIST_FAILURE':
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
