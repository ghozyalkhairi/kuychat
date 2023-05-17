import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

export const getMessages = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/message`)
    return data
  } catch (error) {
    return error
  }
}

export const createMessage = async (messageBody: MessageDraft) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/message`, { messageBody })
    return data
  } catch (error) {
    return error
  }
}
