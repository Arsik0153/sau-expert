const initialState = {
  status: '',
  stat: {},
  error: null,
}

export const getPatientStatisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PATIENT_STATISTICS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_PATIENT_STATISTICS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        stat: action.payload,
      }
    case 'GET_PATIENT_STATISTICS_FAILURE':
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
