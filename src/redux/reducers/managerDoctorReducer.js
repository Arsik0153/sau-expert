const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DOCTORS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_DOCTORS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_DOCTORS_FAILURE':
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
