import axios from 'axios'
import { BASE_URL } from '../../config/api'

export const getMedicineList = (values) => {
  return (dispatch) => {
    dispatch(getMedicineListStarted())
    axios
      .get(`${BASE_URL}/doctor/patients/${values.id}/medicine_purpose/`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(getMedicineListSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getMedicineListFailure(error.response))
      })
  }
}

const getMedicineListStarted = () => ({
  type: 'GET_MEDICINE_LIST_STARTED',
})

const getMedicineListSuccess = (data) => ({
  type: 'GET_MEDICINE_LIST_SUCCESS',
  payload: data,
})

const getMedicineListFailure = (error) => ({
  type: 'GET_MEDICINE_LIST_FAILURE',
  payload: {
    error,
  },
})
