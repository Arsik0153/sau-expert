import axios from 'axios'
import { BASE_URL } from './../config/api'

export const getPatients = (values) => {
  return (dispatch) => {
    dispatch(getPatientsStarted())
    axios
      .get(`${BASE_URL}/management/patients/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getPatientsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getPatientsFailure(error.response))
      })
  }
}

const getPatientsStarted = () => ({
  type: 'GET_PATIENTS_STARTED',
})

const getPatientsSuccess = (data) => ({
  type: 'GET_PATIENTS_SUCCESS',
  payload: data,
})

const getPatientsFailure = (error) => ({
  type: 'GET_PATIENTS_FAILURE',
  payload: {
    error,
  },
})
