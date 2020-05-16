const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCHEDULE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_SCHEDULE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_SCHEDULE_FAILURE':
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
