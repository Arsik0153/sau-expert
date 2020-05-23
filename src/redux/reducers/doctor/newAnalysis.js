const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newAnalysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ANALYSIS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_ANALYSIS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_ANALYSIS_FAILURE':
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
