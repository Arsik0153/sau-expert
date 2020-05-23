const initialState = {
  status: '',
  info: [],
  error: null,
}

export const getMeasuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MEASURES_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_MEASURES_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_MEASURES_FAILURE':
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
