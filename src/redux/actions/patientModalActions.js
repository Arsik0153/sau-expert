import axios from 'axios'
import { BASE_URL } from './../config/api'

export const setSubDate = (values) => {
  return (dispatch) => {
    dispatch(setSubDateStarted())
    axios
      .post(
        `${BASE_URL}/management/patients/${values.id}/subscribe/`,
        { begin_date: values.beginDate, end_date: values.endDate },
        {
          headers: {
            Authorization: `Token ${values.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setSubDateSuccess(res.data))
      })
      .catch((error) => {
        dispatch(setSubDateFailure(error.response))
      })
  }
}

const setSubDateStarted = () => ({
  type: 'SET_SUBDATE_STARTED',
})

const setSubDateSuccess = (data) => ({
  type: 'SET_SUBDATE_SUCCESS',
  payload: data,
})

const setSubDateFailure = (error) => ({
  type: 'SET_SUBDATE_FAILURE',
  payload: {
    error,
  },
})
