const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DOCTOR_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_DOCTOR_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_DOCTOR_FAILURE':
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
