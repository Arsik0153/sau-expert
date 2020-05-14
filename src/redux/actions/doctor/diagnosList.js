import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getDiagnosList = (values) => {
  return (dispatch) => {
    dispatch(getDiagnosListStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/diagnosis/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getDiagnosListSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDiagnosListFailure(error.response))
      })
  }
}

const getDiagnosListStarted = () => ({
  type: 'GET_DIAGNOS_LIST_STARTED',
})

const getDiagnosListSuccess = (data) => ({
  type: 'GET_DIAGNOS_LIST_SUCCESS',
  payload: data,
})

const getDiagnosListFailure = (error) => ({
  type: 'GET_DIAGNOS_LIST_FAILURE',
  payload: {
    error,
  },
})
