const initialState = {
  status: '',
  info: {},
  error: null,
}

export const setDiabetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIABET_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'SET_DIABET_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'SET_DIABET_FAILURE':
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
