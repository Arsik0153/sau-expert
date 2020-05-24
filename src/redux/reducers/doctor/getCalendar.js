const initialState = {
  status: '',
  info: [],
  error: null,
}

export const getCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CALENDAR_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_CALENDAR_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_CALENDAR_FAILURE':
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
