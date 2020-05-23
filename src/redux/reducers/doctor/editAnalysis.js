const initialState = {
  status: '',
  info: {},
  error: null,
}

export const editAnalysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_ANALYSIS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'EDIT_ANALYSIS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'EDIT_ANALYSIS_FAILURE':
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
