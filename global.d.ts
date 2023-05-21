type MessageDraft = {
  username: string
  content: string
  roomId: string
}

type Message = MessageDraft & {
  id: number
  createdAt: Date
}

type RoomDraft = {
  name: string
  isPrivate: boolean
  password?: string
}

type Room = RoomDraft & {
  id: number
  createdAt: Date
  messages: Message[]
}
