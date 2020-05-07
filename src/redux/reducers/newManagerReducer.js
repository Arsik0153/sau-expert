const initialState = {
  status: '',
  stat: {},
  error: null,
}

export const newManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MANAGER_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'NEW_MANAGER_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        stat: action.payload,
      }
    case 'NEW_MANAGER_FAILURE':
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
