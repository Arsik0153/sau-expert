import axios from 'axios'
import { BASE_URL } from './../config/api'

export const viewPatient = (values) => {
  return (dispatch) => {
    dispatch(viewPatientStarted())
    axios
      .get(`${BASE_URL}/management/patients/${values.id}`, {
        headers: {
          Authorization: `Token ${values.token}`,
        },
      })
      .then((res) => {
        dispatch(viewPatientSuccess(res.data))
      })
      .catch((error) => {
        dispatch(viewPatientFailure(error.response))
      })
  }
}

const viewPatientStarted = () => ({
  type: 'VIEW_PATIENT_STARTED',
})

const viewPatientSuccess = (data) => ({
  type: 'VIEW_PATIENT_SUCCESS',
  payload: data,
})

const viewPatientFailure = (error) => ({
  type: 'VIEW_PATIENT_FAILURE',
  payload: {
    error,
  },
})
