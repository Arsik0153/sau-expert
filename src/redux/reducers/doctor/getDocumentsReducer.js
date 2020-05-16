const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getDocumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DOCUMENTS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_DOCUMENTS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_HEART_FAILURE':
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
