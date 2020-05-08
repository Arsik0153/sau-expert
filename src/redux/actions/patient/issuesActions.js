import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getIssues = (values) => {
  return (dispatch) => {
    dispatch(getIssuesStarted())
    axios
      .get(`${BASE_URL}/patient/complaints/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getIssuesSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getIssuesFailure(error.response))
      })
  }
}

const getIssuesStarted = () => ({
  type: 'GET_ISSUES_STARTED',
})

const getIssuesSuccess = (data) => ({
  type: 'GET_ISSUES_SUCCESS',
  payload: data,
})

const getIssuesFailure = (error) => ({
  type: 'GET_ISSUES_FAILURE',
  payload: {
    error,
  },
})

//NEW ISSUE

export const newIssue = (values) => {
  return (dispatch) => {
    dispatch(newIssueStarted())
    axios
      .post(
        `${BASE_URL}/patient/complaints/`,
        {
          text: values.text,
        },
        {
          headers: {
            Authorization: `Token ${values.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(newIssueSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newIssueFailure(error.response))
      })
  }
}

const newIssueStarted = () => ({
  type: 'NEW_ISSUE_STARTED',
})

const newIssueSuccess = (data) => ({
  type: 'NEW_ISSUE_SUCCESS',
  payload: data,
})

const newIssueFailure = (error) => ({
  type: 'NEW_ISSUE_FAILURE',
  payload: {
    error,
  },
})
