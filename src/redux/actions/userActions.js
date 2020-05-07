import axios from 'axios'
import { BASE_URL } from './../config/api'

export const getUserInfo = (values) => {
  return (dispatch) => {
    dispatch(getUserInfoStarted())
    axios
      .get(`${BASE_URL}/user/detail/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data))
        dispatch(getUserInfoSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getUserInfoFailure(error.response))
      })
  }
}

const getUserInfoStarted = () => ({
  type: 'GET_USER_INFO_STARTED',
})

const getUserInfoSuccess = (data) => ({
  type: 'GET_USER_INFO_SUCCESS',
  payload: data,
})

const getUserInfoFailure = (error) => ({
  type: 'GET_USER_INFO_FAILURE',
  payload: {
    error,
  },
})
