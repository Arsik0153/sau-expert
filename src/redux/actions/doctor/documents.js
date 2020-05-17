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
    let formData = new FormData()
    formData.append('title', values.request.title)
    formData.append('type', 1)
    formData.append('file', values.request.file)

    var myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${values.token}`)
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('Origin', 'http://localhost:3000')
    myHeaders.append('Host', 'localhost:3000')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    }
    fetch(
      `http://94.130.25.159/api/v1/doctor/patients/ac94895d-11d5-48bf-978c-b22163c4318a/documents/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(newDocumentSuccess(result.data))
      })
      .catch((error) => {
        dispatch(newDocumentFailure(error.response))
      })
    /*axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/documents/`,
        {
          formData,
        },
        {
          headers: {
            Authorization: `Token ${values.token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((res) => {
        dispatch(newDocumentSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newDocumentFailure(error.response))
      })*/
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
