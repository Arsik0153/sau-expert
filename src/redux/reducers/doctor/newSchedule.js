const initialState = {
  status: '',
  info: {},
  error: null,
}

export const newScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SCHEDULE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_SCHEDULE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'NEW_SCHEDULE_FAILURE':
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
