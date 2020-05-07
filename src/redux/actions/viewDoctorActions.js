import axios from 'axios'
import { BASE_URL } from './../config/api'

let token = localStorage.getItem('token')

export const viewDoctor = (values) => {
  return (dispatch) => {
    dispatch(viewDoctorStarted())
    axios
      .get(`${BASE_URL}/management/doctors/${values.id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        dispatch(viewDoctorSuccess(res.data))
      })
      .catch((error) => {
        dispatch(viewDoctorFailure(error.response))
      })
  }
}

const viewDoctorStarted = () => ({
  type: 'VIEW_DOCTOR_STARTED',
})

const viewDoctorSuccess = (data) => ({
  type: 'VIEW_DOCTOR_SUCCESS',
  payload: data,
})

const viewDoctorFailure = (error) => ({
  type: 'VIEW_DOCTOR_FAILURE',
  payload: {
    error,
  },
})
