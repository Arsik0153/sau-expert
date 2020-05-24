import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getCalendar = (values) => {
  return (dispatch) => {
    dispatch(getCalendarStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/tasks/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getCalendarSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getCalendarFailure(error.response))
      })
  }
}

const getCalendarStarted = () => ({
  type: 'GET_CALENDAR_STARTED',
})

const getCalendarSuccess = (data) => ({
  type: 'GET_CALENDAR_SUCCESS',
  payload: data,
})

const getCalendarFailure = (error) => ({
  type: 'GET_CALENDAR_FAILURE',
  payload: {
    error,
  },
})
