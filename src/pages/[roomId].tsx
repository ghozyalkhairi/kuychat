import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import ChatForm from "@/components/layout/ChatForm"
import ChatList from "@/components/layout/ChatList"
import Head from "next/head"
import { Box } from "@chakra-ui/react"
import Header from "@/components/layout/Header"
import { useEffect, useState } from "react"
import { getMessagesByRoomId } from "@/lib/messageService"
import { useRefresh } from "@/store/appStore"
import RoomPasswordModal from "@/components/layout/RoomPasswordModal"
import { useDisclosure } from "@chakra-ui/react"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const MessageRoom: NextPage<Props> = ({ roomId }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [room, setRoom] = useState<Room>()
  const [loading, setLoading] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const refresh = useRefresh()

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true)
      const messages = await getMessagesByRoomId(roomId)
      setMessages(messages.messages)
      setRoom(messages.room)
      setLoading(false)
    }
    fetchMessages()
  }, [refresh])
  return (
    <>
      <Head>
        <title>KuyChat💬</title>
        <meta name="description" content="KuyChat Disini 💬" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoomPasswordModal
        isOpen={(room?.isPrivate as boolean) && !isAuth}
        onClose={onClose}
        setIsAuth={setIsAuth}
        roomPassword={room?.password as string}
      />
      <Box as="main" bg="brand.gray" minH="100vh">
        <Header isRoom roomName={room?.name} />
        {room?.isPrivate && !isAuth ? null : (
          <ChatList messages={messages} loading={loading} />
        )}
        <ChatForm roomId={roomId} />
      </Box>
    </>
  )
}

interface ServerSideProps {
  roomId: string
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const { roomId } = context.params as { roomId: string }
  return {
    props: {
      roomId,
    },
  }
}

export default MessageRoom
