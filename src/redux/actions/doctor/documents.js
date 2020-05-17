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
  type: 'GET_DOCUMENTS_FAILURE',
  payload: {
    error,
  },
})

export const newDocument = (values) => {
  return (dispatch) => {
    dispatch(newDocumentStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/documents/`,
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
        dispatch(newDocumentSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newDocumentFailure(error.response))
      })
  }
}

const newDocumentStarted = () => ({
  type: 'NEW_DOCUMENT_STARTED',
})

const newDocumentSuccess = (data) => ({
  type: 'NEW_DOCUMENT_SUCCESS',
  payload: data,
})

const newDocumentFailure = (error) => ({
  type: 'NEW_DOCUMENT_FAILURE',
  payload: {
    error,
  },
})
