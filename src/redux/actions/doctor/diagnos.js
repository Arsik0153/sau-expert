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

export const deleteDiagnos = (values) => {
  return (dispatch) => {
    dispatch(deleteDiagnosStarted())
    axios
      .delete(
        `${BASE_URL}/doctor/patients/${values.id}/diagnosis/${values.diagnosId}/`,
        {
          headers: {
            Authorization: `Token ${values.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(deleteDiagnosSuccess(res.data))
      })
      .catch((error) => {
        dispatch(deleteDiagnosFailure(error.response))
      })
  }
}

const deleteDiagnosStarted = () => ({
  type: 'DELETE_DIAGNOS_STARTED',
})

const deleteDiagnosSuccess = (data) => ({
  type: 'DELETE_DIAGNOS_SUCCESS',
  payload: data,
})

const deleteDiagnosFailure = (error) => ({
  type: 'DELETE_DIAGNOS_FAILURE',
  payload: {
    error,
  },
})

export const getDiagnosDetails = (values) => {
  return (dispatch) => {
    dispatch(getDiagnosDetailsStarted())
    console.log('started')
    axios
      .get(
        `${BASE_URL}/doctor/patients/${values.id}/diagnosis/${values.diagnosId}/`,
        {
          headers: {
            Authorization: `Token ${values.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(getDiagnosDetailsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDiagnosDetailsFailure(error.response))
      })
  }
}

const getDiagnosDetailsStarted = () => ({
  type: 'GET_DIAGNOS_DETAILS_STARTED',
})

const getDiagnosDetailsSuccess = (data) => ({
  type: 'GET_DIAGNOS_DETAILS_SUCCESS',
  payload: data,
})

const getDiagnosDetailsFailure = (error) => ({
  type: 'GET_DIAGNOS_DETAILS_FAILURE',
  payload: {
    error,
  },
})

export const editDiagnos = (values) => {
  return (dispatch) => {
    dispatch(editDiagnosStarted())
    console.log('started')
    axios
      .put(
        `${BASE_URL}/doctor/patients/${values.id}/diagnosis/${values.diagnosId}/`,
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
        dispatch(editDiagnosSuccess(res.data))
      })
      .catch((error) => {
        dispatch(editDiagnosFailure(error.response))
      })
  }
}

const editDiagnosStarted = () => ({
  type: 'EDIT_DIAGNOS_STARTED',
})

const editDiagnosSuccess = (data) => ({
  type: 'EDIT_DIAGNOS_SUCCESS',
  payload: data,
})

const editDiagnosFailure = (error) => ({
  type: 'EDIT_DIAGNOS_FAILURE',
  payload: {
    error,
  },
})
