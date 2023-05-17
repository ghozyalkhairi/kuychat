type MessageDraft = {
  username: string
  content: string
}

type Message = MessageDraft & {
  id: number
  createdAt: Date
}
