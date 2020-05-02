import axios from 'axios'
import { BASE_URL } from './../config/api'

export const confirm = (values) => {
  return (dispatch) => {
    dispatch(confirmStarted())
    axios
      .post(`${BASE_URL}/patient/confirmation/`, {
        ...values,
      })
      .then((res) => {
        dispatch(confirmSuccess(res.status))
      })
      .catch((error) => {
        console.log(error.response)
        dispatch(confirmFailure(error.message))
      })
  }
}

const confirmStarted = () => ({
  type: 'CONFIRM_STARTED',
})

const confirmSuccess = (data) => ({
  type: 'CONFIRM_SUCCESS',
  payload: data,
})

const confirmFailure = (error) => ({
  type: 'CONFIRM_FAILURE',
  payload: {
    error,
  },
})
