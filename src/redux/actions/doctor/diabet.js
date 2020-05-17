import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const getDiabet = (values) => {
  return (dispatch) => {
    dispatch(getDiabetStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/diabetes/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getDiabetSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDiabetFailure(error.response))
      })
  }
}

const getDiabetStarted = () => ({
  type: 'GET_DIABET_STARTED',
})

const getDiabetSuccess = (data) => ({
  type: 'GET_DIABET_SUCCESS',
  payload: data,
})

const getDiabetFailure = (error) => ({
  type: 'GET_DIABET_FAILURE',
  payload: {
    error,
  },
})

export const setDiabet = (values) => {
  return (dispatch) => {
    dispatch(setDiabetStarted())
    axios
      .put(
        `${BASE_URL}/doctor/patients/${values.id}/diabetes/`,
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
        dispatch(setDiabetSuccess(res.data))
      })
      .catch((error) => {
        dispatch(setDiabetFailure(error.response))
      })
  }
}

const setDiabetStarted = () => ({
  type: 'SET_DIABET_STARTED',
})

const setDiabetSuccess = (data) => ({
  type: 'SET_DIABET_SUCCESS',
  payload: data,
})

const setDiabetFailure = (error) => ({
  type: 'SET_DIABET_FAILURE',
  payload: {
    error,
  },
})
