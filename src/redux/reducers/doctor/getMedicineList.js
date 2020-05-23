const initialState = {
  status: '',
  info: {},
  error: null,
}

export const getMedicineListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MEDICINE_LIST_STARTED':
      return {
        ...state,
        status: 'pending',
      }
    case 'GET_MEDICINE_LIST_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        info: action.payload,
      }
    case 'GET_MEDICINE_LIST_FAILURE':
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
