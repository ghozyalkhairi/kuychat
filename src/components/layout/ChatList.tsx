import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import ChatItem from "./ChatItem"
import { FC } from "react"

interface Props {
  messages: Message[]
  loading: boolean
}

const ChatList: FC<Props> = ({ messages, loading }) => {
  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="brand.primary" />
      </Center>
    )
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={4}
      as="section"
      w="100%"
      h="100%"
      bg="brand.gray"
      color="brand.black"
      overflowY="auto"
      pt={14}
    >
      {messages.length > 0 ? (
        messages.map((message) => (
          <ChatItem key={message.id} message={message} />
        ))
      ) : (
        <Center h="100vh">
          <Text fontSize="sm" textAlign="center" color="brand.white">
            Belum ada pesan
          </Text>
        </Center>
      )}
    </Box>
  )
}

export default ChatList
