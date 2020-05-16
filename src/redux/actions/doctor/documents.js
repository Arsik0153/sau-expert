import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getDocuments = (values) => {
  return (dispatch) => {
    dispatch(getDocumentsStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/documents/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getDocumentsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDocumentsFailure(error.response))
      })
  }
}

const getDocumentsStarted = () => ({
  type: 'GET_DOCUMENTS_STARTED',
})

const getDocumentsSuccess = (data) => ({
  type: 'GET_DOCUMENTS_SUCCESS',
  payload: data,
})

const getDocumentsFailure = (error) => ({
  type: 'NEW_HEART_FAILURE',
  payload: {
    error,
  },
})
