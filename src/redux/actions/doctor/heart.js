import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const newHeart = (values) => {
  return (dispatch) => {
    dispatch(newHeartStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/heart/`,
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
        dispatch(newHeartSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newHeartFailure(error.response))
      })
  }
}

const newHeartStarted = () => ({
  type: 'NEW_HEART_STARTED',
})

const newHeartSuccess = (data) => ({
  type: 'NEW_HEART_SUCCESS',
  payload: data,
})

const newHeartFailure = (error) => ({
  type: 'NEW_HEART_FAILURE',
  payload: {
    error,
  },
})

export const getHeart = (values) => {
  return (dispatch) => {
    dispatch(getHeartStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/heart/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getHeartSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getHeartFailure(error.response))
      })
  }
}

const getHeartStarted = () => ({
  type: 'NEW_HEART_STARTED',
})

const getHeartSuccess = (data) => ({
  type: 'NEW_HEART_SUCCESS',
  payload: data,
})

const getHeartFailure = (error) => ({
  type: 'NEW_HEART_FAILURE',
  payload: {
    error,
  },
})
