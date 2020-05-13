const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getPatientsForDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PATIENTS_STATISTICS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_PATIENTS_STATISTICS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_PATIENTS_STATISTICS_FAILURE':
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
