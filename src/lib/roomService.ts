import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

export const getRooms = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/room`)
    return data
  } catch (error) {
    return error
  }
}

export const createRoom = async (roomBody: RoomDraft) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/room`, { roomBody })
    return data
  } catch (error) {
    return error
  }
}
