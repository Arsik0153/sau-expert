const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_APPOINTMENT_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_APPOINTMENT_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_APPOINTMENT_FAILURE':
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
