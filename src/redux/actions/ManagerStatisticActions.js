import axios from 'axios'
import { BASE_URL } from './../config/api'

//Patient
export const getPatientStatistics = (values) => {
  return (dispatch) => {
    dispatch(getPatientStatisticsStarted())
    axios
      .get(`${BASE_URL}/management/dashboard/patients/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getPatientStatisticsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getPatientStatisticsFailure(error.response))
      })
  }
}

const getPatientStatisticsStarted = () => ({
  type: 'GET_PATIENT_STATISTICS_STARTED',
})

const getPatientStatisticsSuccess = (data) => ({
  type: 'GET_PATIENT_STATISTICS_SUCCESS',
  payload: data,
})

const getPatientStatisticsFailure = (error) => ({
  type: 'GET_PATIENT_STATISTICS_FAILURE',
  payload: {
    error,
  },
})

//Doctor
export const getDoctorStatistics = (values) => {
  return (dispatch) => {
    dispatch(getDoctorStatisticsStarted())
    axios
      .get(`${BASE_URL}/management/dashboard/doctors/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getDoctorStatisticsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDoctorStatisticsFailure(error.response))
      })
  }
}

const getDoctorStatisticsStarted = () => ({
  type: 'GET_DOCTOR_STATISTICS_STARTED',
})

const getDoctorStatisticsSuccess = (data) => ({
  type: 'GET_DOCTOR_STATISTICS_SUCCESS',
  payload: data,
})

const getDoctorStatisticsFailure = (error) => ({
  type: 'GET_DOCTOR_STATISTICS_FAILURE',
  payload: {
    error,
  },
})
