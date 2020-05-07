import axios from 'axios'
import { BASE_URL } from './../config/api'

export const getDoctors = (values) => {
  return (dispatch) => {
    dispatch(getDoctorsStarted())
    axios
      .get(`${BASE_URL}/management/doctors/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getDoctorsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDoctorsFailure(error.response))
      })
  }
}

const getDoctorsStarted = () => ({
  type: 'GET_DOCTORS_STARTED',
})

const getDoctorsSuccess = (data) => ({
  type: 'GET_DOCTORS_SUCCESS',
  payload: data,
})

const getDoctorsFailure = (error) => ({
  type: 'GET_DOCTORS_FAILURE',
  payload: {
    error,
  },
})
