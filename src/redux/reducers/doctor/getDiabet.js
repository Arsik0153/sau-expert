const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getDiabetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DIABET_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_DIABET_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_DIABET_FAILURE':
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
