import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"
import { formatDistance } from "date-fns"
import { id } from "date-fns/locale"

interface Props {
  message: Message
}

const ChatItem: FC<Props> = ({ message }) => {
  return (
    <Box
      bg="brand.primary"
      color="brand.black"
      px={4}
      py={2}
      borderRadius="2xl"
      my={2}
      alignSelf="flex-start"
      maxW="65%"
    >
      <Text fontSize="sm" fontWeight="bold">
        {message.username}
      </Text>
      <Text fontSize="sm">{message.content}</Text>

      <Text fontSize="xs" textAlign="right" color="brand.lightGray">
        {formatDistance(new Date(message.createdAt), new Date(), {
          locale: id,
          addSuffix: true,
        })}
      </Text>
    </Box>
  )
}

export default ChatItem
