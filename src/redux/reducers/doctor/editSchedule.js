const initialState = {
  status: '',
  info: {},
  error: null,
}

export const editScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_SCHEDULE_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'EDIT_SCHEDULE_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'EDIT_SCHEDULE_FAILURE':
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
