import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getPatientProfile = (values) => {
  return (dispatch) => {
    dispatch(getPatientProfileStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getPatientProfileSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getPatientProfileFailure(error.response))
      })
  }
}

const getPatientProfileStarted = () => ({
  type: 'GET_PATIENT_PROFILE_STARTED',
})

const getPatientProfileSuccess = (data) => ({
  type: 'GET_PATIENT_PROFILE_SUCCESS',
  payload: data,
})

const getPatientProfileFailure = (error) => ({
  type: 'GET_PATIENT_PROFILE_FAILURE',
  payload: {
    error,
  },
})
