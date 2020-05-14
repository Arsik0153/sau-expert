import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const newDiagnos = (values) => {
  return (dispatch) => {
    dispatch(newDiagnosStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/diagnosis/`,
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
        dispatch(newDiagnosSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newDiagnosFailure(error.response))
      })
  }
}

const newDiagnosStarted = () => ({
  type: 'NEW_DIAGNOS_STARTED',
})

const newDiagnosSuccess = (data) => ({
  type: 'NEW_DIAGNOS_SUCCESS',
  payload: data,
})

const newDiagnosFailure = (error) => ({
  type: 'NEW_DIAGNOS_FAILURE',
  payload: {
    error,
  },
})

export const searchDiagnos = (values) => {
  return (dispatch) => {
    dispatch(searchDiagnosStarted())
    axios
      .get(`${BASE_URL}/dictionaries/diseases?search=${values}`)
      .then((res) => {
        dispatch(searchDiagnosSuccess(res.data))
      })
      .catch((error) => {
        dispatch(searchDiagnosFailure(error.response))
      })
  }
}

const searchDiagnosStarted = () => ({
  type: 'SEARCH_DIAGNOS_STARTED',
})

const searchDiagnosSuccess = (data) => ({
  type: 'SEARCH_DIAGNOS_SUCCESS',
  payload: data,
})

const searchDiagnosFailure = (error) => ({
  type: 'SEARCH_DIAGNOS_FAILURE',
  payload: {
    error,
  },
})
