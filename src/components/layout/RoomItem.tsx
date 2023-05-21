import { Link } from "@chakra-ui/next-js"
import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"
import { formatDistance } from "date-fns"
import { id } from "date-fns/locale"

export interface Props {
  room: Room
}

const RoomItem: FC<Props> = ({ room }) => {
  return (
    <Box
      bg="brand.semiBlack"
      color="brand.white"
      my={2}
      p={4}
      borderRadius={4}
      mb={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      cursor="pointer"
    >
      <Link href={`/${room.id}`} w="100%">
        <Box w="100%">
          <Text fontSize="sm">{room.name}</Text>
          <Text fontSize="xs" opacity={0.8}>
            dibuat{" "}
            {formatDistance(new Date(room.createdAt), new Date(), {
              locale: id,
              addSuffix: true,
            })}
          </Text>
        </Box>
      </Link>
      {room.isPrivate && "🔒"}
    </Box>
  )
}

export default RoomItem
