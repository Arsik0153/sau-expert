const initialState = {
  status: '',
  info: {},
  error: null,
}

export const viewMyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_PROFILE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'VIEW_PROFILE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'VIEW_PROFILE_FAILURE':
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
