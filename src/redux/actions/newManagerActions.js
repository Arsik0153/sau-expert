import axios from 'axios'
import { BASE_URL } from './../config/api'

let token = localStorage.getItem('token')

export const newManager = (values) => {
  return (dispatch) => {
    dispatch(newManagerStarted())
    axios
      .post(
        `${BASE_URL}/management/managers/`,
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(newManagerSuccess(res.data))
      })
      .catch((error) => {
        dispatch(newManagerFailure(error.response))
      })
  }
}

const newManagerStarted = () => ({
  type: 'NEW_MANAGER_STARTED',
})

const newManagerSuccess = (data) => ({
  type: 'NEW_MANAGER_SUCCESS',
  payload: data.session_key,
})

const newManagerFailure = (error) => ({
  type: 'NEW_MANAGER_FAILURE',
  payload: {
    error,
  },
})

//GET ALL
export const getManagers = (tkn) => {
  return (dispatch) => {
    dispatch(getManagersStarted())
    axios
      .get(`${BASE_URL}/management/managers/`, {
        headers: {
          Authorization: `Token ${tkn}`,
        },
      })
      .then((res) => {
        dispatch(getManagersSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getManagersFailure(error.response))
      })
  }
}

const getManagersStarted = () => ({
  type: 'GET_MANAGERS_STARTED',
})

const getManagersSuccess = (data) => ({
  type: 'GET_MANAGERS_SUCCESS',
  payload: data,
})

const getManagersFailure = (error) => ({
  type: 'GET_MANAGERS_FAILURE',
  payload: {
    error,
  },
})
