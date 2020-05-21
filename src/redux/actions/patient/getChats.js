import axios from 'axios'
import { BASE_URL } from './../../config/api'

export const getChats = (values) => {
  return (dispatch) => {
    dispatch(getChatsStarted())
    axios
      .get(`${BASE_URL}/patient/chat/rooms/`, {
        headers: {
          Authorization: `Token ${values}`,
        },
      })
      .then((res) => {
        dispatch(getChatsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getChatsFailure(error.response))
      })
  }
}

const getChatsStarted = () => ({
  type: 'GET_CHATS_STARTED',
})

const getChatsSuccess = (data) => ({
  type: 'GET_CHATS_SUCCESS',
  payload: data,
})

const getChatsFailure = (error) => ({
  type: 'GET_CHATS_FAILURE',
  payload: {
    error,
  },
})
