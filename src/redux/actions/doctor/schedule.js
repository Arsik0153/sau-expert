import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const newSchedule = (values) => {
  return (dispatch) => {
    dispatch(newScheduleStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/daily_regime/`,
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
        dispatch(newScheduleSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newScheduleFailure(error.response))
      })
  }
}

const newScheduleStarted = () => ({
  type: 'NEW_SCHEDULE_STARTED',
})

const newScheduleSuccess = (data) => ({
  type: 'NEW_SCHEDULE_SUCCESS',
  payload: data,
})

const newScheduleFailure = (error) => ({
  type: 'NEW_SCHEDULE_FAILURE',
  payload: {
    error,
  },
})

//GET
export const getSchedule = (values) => {
  return (dispatch) => {
    dispatch(getScheduleStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/daily_regime/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getScheduleSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getScheduleFailure(error.response))
      })
  }
}

const getScheduleStarted = () => ({
  type: 'GET_SCHEDULE_STARTED',
})

const getScheduleSuccess = (data) => ({
  type: 'GET_SCHEDULE_SUCCESS',
  payload: data,
})

const getScheduleFailure = (error) => ({
  type: 'GET_SCHEDULE_FAILURE',
  payload: {
    error,
  },
})
