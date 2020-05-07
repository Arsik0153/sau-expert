const initialState = {
  status: '',
  info: {},
  error: null,
}

export const viewPatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_PATIENT_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'VIEW_PATIENT_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'VIEW_PATIENT_FAILURE':
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
