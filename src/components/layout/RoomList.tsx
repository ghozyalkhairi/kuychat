import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import { FC } from "react"
import RoomItem from "./RoomItem"

export interface Props {
  rooms: Room[]
  loading: boolean
}

const RoomList: FC<Props> = ({ rooms, loading }) => {
  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="md" color="brand.primary" />
      </Center>
    )
  }
  return (
    <Box
      w="100%"
      h="100%"
      color="white"
      display="flex"
      flexDirection="column"
      as="section"
      overflowY="auto"
      mt={4}
    >
      {rooms?.length > 0 ? (
        rooms.map((room) => <RoomItem key={room.id} room={room} />)
      ) : (
        <Center h="100%">
          <Text fontSize="sm" mt={8} textAlign="center" color="brand.white">
            Belum ada room
          </Text>
        </Center>
      )}
    </Box>
  )
}

export default RoomList
