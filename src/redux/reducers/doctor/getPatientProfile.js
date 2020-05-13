const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getPatientProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PATIENT_PROFILE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_PATIENT_PROFILE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_PATIENT_PROFILE_FAILURE':
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
