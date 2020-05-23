import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const getHistory = (values) => {
  return (dispatch) => {
    dispatch(getHistoryStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/history/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getHistorySuccess(res.data))
      })
      .catch((error) => {
        dispatch(getHistoryFailure(error.response))
      })
  }
}

const getHistoryStarted = () => ({
  type: 'GET_HISTORY_STARTED',
})

const getHistorySuccess = (data) => ({
  type: 'GET_HISTORY_SUCCESS',
  payload: data,
})

const getHistoryFailure = (error) => ({
  type: 'GET_HISTORY_FAILURE',
  payload: {
    error,
  },
})
