const initialState = {
  status: '',
  info: {},
  error: null,
}

export const viewDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_DOCTOR_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'VIEW_DOCTOR_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'VIEW_DOCTOR_FAILURE':
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
