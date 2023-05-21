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
} from "@chakra-ui/react"
import { FC, useState } from "react"
import { useUserName, useUserActions } from "@/store/userStore"

export interface Props {
  isOpen: boolean
  onClose: () => void
}

const ProfileForm: FC<Props> = ({ isOpen, onClose }) => {
  const userName = useUserName()

  const [name, setName] = useState(userName)

  const { setUserName } = useUserActions()

  const handleSubmit = () => {
    setUserName(name)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="brand.gray" color="brand.white">
        <ModalHeader>Ubah Profil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name">
            <FormLabel>Nama</FormLabel>
            <Input
              bg="brand.semiBlack"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            Simpan
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

export default ProfileForm
