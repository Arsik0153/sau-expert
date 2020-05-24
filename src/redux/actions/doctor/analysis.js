import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getAnalysis = (values) => {
  return (dispatch) => {
    dispatch(getAnalysisStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/analysis/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getAnalysisSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getAnalysisFailure(error.response))
      })
  }
}

const getAnalysisStarted = () => ({
  type: 'GET_ANALYSIS_STARTED',
})

const getAnalysisSuccess = (data) => ({
  type: 'GET_ANALYSIS_SUCCESS',
  payload: data,
})

const getAnalysisFailure = (error) => ({
  type: 'GET_ANALYSIS_FAILURE',
  payload: {
    error,
  },
})

export const editAnalysis = (values) => {
  return (dispatch) => {
    dispatch(editAnalysisStarted())
    axios
      .put(
        `${BASE_URL}/doctor/patients/${values.id}/analysis/${values.analysisId}/`,
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
        dispatch(editAnalysisSuccess(res.data))
      })
      .catch((error) => {
        dispatch(editAnalysisFailure(error.response))
      })
  }
}

const editAnalysisStarted = () => ({
  type: 'EDIT_ANALYSIS_STARTED',
})

const editAnalysisSuccess = (data) => ({
  type: 'EDIT_ANALYSIS_SUCCESS',
  payload: data,
})

const editAnalysisFailure = (error) => ({
  type: 'EDIT_ANALYSIS_FAILURE',
  payload: {
    error,
  },
})

export const newAnalysis = (values) => {
  return (dispatch) => {
    dispatch(newAnalysisStarted())
    axios
      .post(
        `${BASE_URL}/doctor/patients/${values.id}/analysis/`,
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
        dispatch(newAnalysisSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newAnalysisFailure(error.response))
      })
  }
}

const newAnalysisStarted = () => ({
  type: 'NEW_ANALYSIS_STARTED',
})

const newAnalysisSuccess = (data) => ({
  type: 'NEW_ANALYSIS_SUCCESS',
  payload: data,
})

const newAnalysisFailure = (error) => ({
  type: 'NEW_ANALYSIS_FAILURE',
  payload: {
    error,
  },
})
