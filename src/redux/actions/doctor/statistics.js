import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getDoctorStatistics = (values) => {
  return (dispatch) => {
    dispatch(getDoctorStatisticsStarted())
    axios
      .get(`${BASE_URL}/doctor/dashboard/`, {
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
