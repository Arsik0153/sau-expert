import axios from 'axios'
import { BASE_URL } from './../config/api'

let token = localStorage.getItem('token')

export const newDoctor = (values) => {
  return (dispatch) => {
    dispatch(newDoctorStarted())
    axios
      .post(
        `${BASE_URL}/management/doctors/`,
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(newDoctorSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newDoctorFailure(error.response))
      })
  }
}

const newDoctorStarted = () => ({
  type: 'NEW_DOCTOR_STARTED',
})

const newDoctorSuccess = (data) => ({
  type: 'NEW_DOCTOR_SUCCESS',
  payload: data,
})

const newDoctorFailure = (error) => ({
  type: 'NEW_DOCTOR_FAILURE',
  payload: {
    error,
  },
})
