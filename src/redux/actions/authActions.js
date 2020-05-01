import axios from 'axios'
import { BASE_URL } from './../config/api'

export const register = (values) => {
  return (dispatch) => {
    dispatch(registerStarted())
    axios
      .post(`${BASE_URL}/patient/register/`, {
        ...values,
      })
      .then((res) => {
        dispatch(registerSuccess(res.data))
      })
      .catch((error) => {
        console.log(error.response)
        dispatch(registerFailure(error.message))
      })
  }
}

const registerStarted = () => ({
  type: 'REGISTER_STARTED',
})

const registerSuccess = (data) => ({
  type: 'REGISTER_SUCCESS',
  payload: data.session_key,
})

const registerFailure = (error) => ({
  type: 'REGISTER_FAILURE',
  payload: {
    error,
  },
})
