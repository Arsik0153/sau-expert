const initialState = {
  status: '',
  info: {},
  error: null,
}

export const deleteScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_SCHEDULE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'DELETE_SCHEDULE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'DELETE_SCHEDULE_FAILURE':
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
