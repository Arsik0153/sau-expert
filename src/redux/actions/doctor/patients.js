import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getPatientsForDoctor = (values) => {
  return (dispatch) => {
    dispatch(getPatientsForDoctorStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getPatientsForDoctorSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getPatientsForDoctorFailure(error.response))
      })
  }
}

const getPatientsForDoctorStarted = () => ({
  type: 'GET_PATIENTS_STATISTICS_STARTED',
})

const getPatientsForDoctorSuccess = (data) => ({
  type: 'GET_PATIENTS_STATISTICS_SUCCESS',
  payload: data,
})

const getPatientsForDoctorFailure = (error) => ({
  type: 'GET_PATIENTS_STATISTICS_FAILURE',
  payload: {
    error,
  },
})
