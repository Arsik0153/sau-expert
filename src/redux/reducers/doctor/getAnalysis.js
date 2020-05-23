const initialState = {
  status: '',
  info: [],
  error: null,
}

export const getAnalysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ANALYSIS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_ANALYSIS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_ANALYSIS_FAILURE':
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
