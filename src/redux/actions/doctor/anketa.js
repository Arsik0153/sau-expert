import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const newAnketa = (values) => {
  return (dispatch) => {
    dispatch(newAnketaStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/profile/create/`,
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
        dispatch(newAnketaSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newAnketaFailure(error.response))
      })
  }
}

const newAnketaStarted = () => ({
  type: 'NEW_ANKETA_STARTED',
})

const newAnketaSuccess = (data) => ({
  type: 'NEW_ANKETA_SUCCESS',
  payload: data,
})

const newAnketaFailure = (error) => ({
  type: 'NEW_ANKETA_FAILURE',
  payload: {
    error,
  },
})

export const getAnketa = (values) => {
  return (dispatch) => {
    dispatch(getAnketaStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/profile/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getAnketaSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getAnketaFailure(error.response))
      })
  }
}

const getAnketaStarted = () => ({
  type: 'GET_ANKETA_STARTED',
})

const getAnketaSuccess = (data) => ({
  type: 'GET_ANKETA_SUCCESS',
  payload: data,
})

const getAnketaFailure = (error) => ({
  type: 'GET_ANKETA_FAILURE',
  payload: {
    error,
  },
})
