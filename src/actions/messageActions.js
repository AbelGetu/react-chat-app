import axios from "axios"
import { BASE_URL } from "../constants/global"
import { MESSAGE_CREATE_FAIL, MESSAGE_CREATE_REQUEST, MESSAGE_CREATE_SUCCESS } from "../constants/messageConstants"

export const storeMessage = (message) => async (dispatch, getState) => {
    try {
      dispatch({
        type: MESSAGE_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`${BASE_URL}/api/messages`, {message: message}, config)
  
      dispatch({
        type: MESSAGE_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: MESSAGE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }