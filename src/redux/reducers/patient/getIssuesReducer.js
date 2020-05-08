const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getIssuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ISSUES_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_ISSUES_FAILURE':
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
