import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormLabel,
  FormControl,
  Input,
  useToast,
} from "@chakra-ui/react"
import { FC, useState } from "react"
import { Link } from "@chakra-ui/next-js"

export interface Props {
  isOpen: boolean
  roomPassword: string
  setIsAuth: (isAuth: boolean) => void
  onClose: () => void
}

const RoomPasswordModal: FC<Props> = ({
  isOpen,
  onClose,
  setIsAuth,
  roomPassword,
}) => {
  const toast = useToast()

  const [passwordRoom, setPasswordRoom] = useState("")

  const handleSubmit = () => {
    if (passwordRoom === roomPassword) {
      setIsAuth(true)
      onClose()
    } else {
      toast({
        title: "Password Salah",
        description: "Password yang anda masukan salah",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      })
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="brand.gray" color="brand.white">
        <ModalHeader>Room Ini Private</ModalHeader>
        <ModalBody>
          <FormControl id="password">
            <FormLabel>Masukan Password Room</FormLabel>
            <Input
              bg="brand.semiBlack"
              type="password"
              value={passwordRoom}
              onChange={(e) => setPasswordRoom(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="brand.primary"
            color="brand.black"
            mr={3}
            onClick={() => {
              handleSubmit()
            }}
          >
            Kirim
          </Button>
          <Button
            variant="ghost"
            _hover={{
              bg: "brand.white",
              color: "brand.black",
            }}
            onClick={() => {
              onClose()
            }}
          >
            <Link href="/">Kembali ke Home</Link>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RoomPasswordModal
