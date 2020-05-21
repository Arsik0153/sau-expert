const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getChatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHATS_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_CHATS_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_CHATS_FAILURE':
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
