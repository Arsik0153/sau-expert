const initialState = {
  status: '',
  stat: {},
  error: null,
}

export const getDoctorStatisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DOCTOR_STATISTICS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_DOCTOR_STATISTICS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        stat: action.payload,
      }
    case 'GET_DOCTOR_STATISTICS_FAILURE':
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
