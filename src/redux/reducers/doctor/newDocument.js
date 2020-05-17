const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DOCUMENT_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_DOCUMENT_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_DOCUMENT_FAILURE':
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
