import axios from 'axios'
import { BASE_URL } from './../config/api'

export const login = (values) => {
  return (dispatch) => {
    dispatch(loginStarted())
    axios
      .post(`${BASE_URL}/user/login/`, {
        ...values,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch(loginSuccess(res.data.token))
      })
      .catch((error) => {
        dispatch(loginFailure(error))
      })
  }
}

const loginStarted = () => ({
  type: 'LOGIN_STARTED',
})

const loginSuccess = (data) => ({
  type: 'LOGIN_SUCCESS',
  payload: data,
})

const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: {
    error,
  },
})
