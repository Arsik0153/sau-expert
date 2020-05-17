import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const getLifestyle = (values) => {
  return (dispatch) => {
    dispatch(getLifestyleStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/recommendations/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getLifestyleSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getLifestyleFailure(error.response))
      })
  }
}

const getLifestyleStarted = () => ({
  type: 'GET_LIFESTYLE_STARTED',
})

const getLifestyleSuccess = (data) => ({
  type: 'GET_LIFESTYLE_SUCCESS',
  payload: data,
})

const getLifestyleFailure = (error) => ({
  type: 'GET_LIFESTYLE_FAILURE',
  payload: {
    error,
  },
})

export const setLifestyle = (values) => {
  return (dispatch) => {
    dispatch(setLifestyleStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/recommendations/`,
        { ...values.request },
        {
          headers: {
            Authorization: `Token ${values.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setLifestyleSuccess(res.data))
      })
      .catch((error) => {
        dispatch(setLifestyleFailure(error.response))
      })
  }
}

const setLifestyleStarted = () => ({
  type: 'SET_LIFESTYLE_STARTED',
})

const setLifestyleSuccess = (data) => ({
  type: 'SET_LIFESTYLE_SUCCESS',
  payload: data,
})

const setLifestyleFailure = (error) => ({
  type: 'SET_LIFESTYLE_FAILURE',
  payload: {
    error,
  },
})
