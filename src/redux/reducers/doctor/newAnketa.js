const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newAnketaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ANKETA_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_ANKETA_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_ANKETA_FAILURE':
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
