import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  FormControl,
  Input,
  Switch,
  useToast,
} from "@chakra-ui/react"
import { FC, useState } from "react"
import { useAppActions } from "@/store/appStore"
import { createRoom } from "@/lib/roomService"

export interface Props {
  isOpen: boolean
  onClose: () => void
}

const RoomCreatorModal: FC<Props> = ({ isOpen, onClose }) => {
  const toast = useToast()

  const [name, setName] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [password, setPassword] = useState("")

  const { setRefresh } = useAppActions()

  const handleSubmit = () => {
    if (!name) {
      toast({
        title: "Nama room tidak boleh kosong",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    if (isPrivate && !password) {
      toast({
        title: "Password room tidak boleh kosong",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    toast({
      title: "Sedang membuat room...",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top",
    })

    if (!isPrivate) {
      createRoom({
        name,
        isPrivate,
      })
        .then(() => {
          toast({
            title: "Room berhasil dibuat",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
          onClose()
          setRefresh()
        })
        .catch((err) => {
          toast({
            title: "Room gagal dibuat",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        })
    }

    if (isPrivate) {
      createRoom({
        name,
        isPrivate,
        password,
      })
        .then(() => {
          toast({
            title: "Room berhasil dibuat",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
          onClose()
          setRefresh()
        })
        .catch((err) => {
          toast({
            title: "Room gagal dibuat",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        })
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="brand.gray" color="brand.white">
        <ModalHeader>Buat Room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            id="private"
            my={4}
          >
            <FormLabel>Private Room</FormLabel>
            <Switch
              colorScheme="brand.primary"
              size="md"
              isChecked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
            />
          </FormControl>

          <FormControl id="name" my={4}>
            <FormLabel>Nama Room</FormLabel>
            <Input
              bg="brand.semiBlack"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          {isPrivate && (
            <FormControl id="password">
              <FormLabel>Password Room</FormLabel>
              <Input
                bg="brand.semiBlack"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          )}
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
            Buat
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              onClose()
            }}
          >
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RoomCreatorModal
