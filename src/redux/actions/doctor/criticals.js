import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const newCritical = (values) => {
  return (dispatch) => {
    dispatch(newCriticalStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/heart/critical_case/`,
        {
          ...values.request,
        },
        {
          headers: {
            Authorization: `Token ${values.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(newCriticalSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newCriticalFailure(error.response))
      })
  }
}

const newCriticalStarted = () => ({
  type: 'NEW_CRITICAL_STARTED',
})

const newCriticalSuccess = (data) => ({
  type: 'NEW_CRITICAL_SUCCESS',
  payload: data,
})

const newCriticalFailure = (error) => ({
  type: 'NEW_CRITICAL_FAILURE',
  payload: {
    error,
  },
})
