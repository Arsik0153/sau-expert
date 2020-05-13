import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getMyProfile = (values) => {
  return (dispatch) => {
    dispatch(getMyProfileStarted())
    axios
      .get(`${BASE_URL}/doctor/profile/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getMyProfileSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getMyProfileFailure(error.response))
      })
  }
}

const getMyProfileStarted = () => ({
  type: 'GET_MY_PROFILE_STARTED',
})

const getMyProfileSuccess = (data) => ({
  type: 'GET_MY_PROFILE_SUCCESS',
  payload: data,
})

const getMyProfileFailure = (error) => ({
  type: 'GET_MY_PROFILE_FAILURE',
  payload: {
    error,
  },
})
