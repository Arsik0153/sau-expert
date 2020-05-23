import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const newAppointment = (values) => {
  return (dispatch) => {
    dispatch(newAppointmentStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/medicine_purpose/`,
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
        dispatch(newAppointmentSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newAppointmentFailure(error.response))
      })
  }
}

const newAppointmentStarted = () => ({
  type: 'NEW_APPOINTMENT_STARTED',
})

const newAppointmentSuccess = (data) => ({
  type: 'NEW_APPOINTMENT_SUCCESS',
  payload: data,
})

const newAppointmentFailure = (error) => ({
  type: 'NEW_APPOINTMENT_FAILURE',
  payload: {
    error,
  },
})
