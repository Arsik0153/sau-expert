const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ISSUE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_ISSUE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_ISSUE_FAILURE':
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
