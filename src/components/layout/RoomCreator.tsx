import { Box, Button, Text, useDisclosure } from "@chakra-ui/react"
import RoomCreatorModal from "./RoomCreatorModal"

const RoomCreator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <RoomCreatorModal isOpen={isOpen} onClose={onClose} />
      <Box
        w="100%"
        h="100%"
        bg="brand.gray"
        color="brand.white"
        display="flex"
        flexDirection="column"
        as="section"
        overflowY="auto"
        pt={14}
        px={4}
      >
        <Box w="100%" h="100%" mt={6}>
          <Button
            onClick={onOpen}
            w="100%"
            bg="brand.primary"
            color="brand.black"
            variant="outline"
            borderColor="brand.primary"
            _hover={{
              bg: "brand.semiBlack",
              color: "brand.primary",
              borderColor: "brand.primary",
            }}
          >
            <Text fontSize="sm">Buat Room Baru</Text>
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default RoomCreator
