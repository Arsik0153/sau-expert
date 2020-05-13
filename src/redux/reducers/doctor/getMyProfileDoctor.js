const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getMyProfileDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MY_PROFILE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_MY_PROFILE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_MY_PROFILE_FAILURE':
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
