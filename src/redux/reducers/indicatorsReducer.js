const initialState = {
  pending: false,
  indicators: [],
  error: null,
}

export const indicatorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INDICATORS':
      return {
        ...state,
        pending: true,
        indicators: action.payload,
      }
    default:
      return state
  }
}
