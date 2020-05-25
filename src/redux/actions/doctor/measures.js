import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getMeasures = (values) => {
  return (dispatch) => {
    dispatch(getMeasuresStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/measurement_purpose/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getMeasuresSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getMeasuresFailure(error.response))
      })
  }
}

const getMeasuresStarted = () => ({
  type: 'GET_MEASURES_STARTED',
})

const getMeasuresSuccess = (data) => ({
  type: 'GET_MEASURES_SUCCESS',
  payload: data,
})

const getMeasuresFailure = (error) => ({
  type: 'GET_MEASURES_FAILURE',
  payload: {
    error,
  },
})
