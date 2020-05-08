import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const viewMyProfile = (values) => {
  return (dispatch) => {
    dispatch(viewMyProfileStarted())
    axios
      .get(`${BASE_URL}/patient/profile/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(viewMyProfileSuccess(res.data))
      })
      .catch((error) => {
        dispatch(viewMyProfileFailure(error.response))
      })
  }
}

const viewMyProfileStarted = () => ({
  type: 'VIEW_PROFILE_STARTED',
})

const viewMyProfileSuccess = (data) => ({
  type: 'VIEW_PROFILE_SUCCESS',
  payload: data,
})

const viewMyProfileFailure = (error) => ({
  type: 'VIEW_PROFILE_FAILURE',
  payload: {
    error,
  },
})
