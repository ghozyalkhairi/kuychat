import ProfileIcon from "@/assets/ProfileIcon"
import SendIcon from "@/assets/SendIcon"
import { Box, useDisclosure, Input } from "@chakra-ui/react"
import { FC, FormEventHandler, useState } from "react"
import ProfileForm from "./ProfileForm"
import { createMessage } from "@/lib/messageService"
import { useUserName } from "@/store/userStore"
import { useAppActions } from "@/store/appStore"
import { useToast } from "@chakra-ui/react"

interface Props {
  roomId: string
}

const ChatForm: FC<Props> = ({ roomId }) => {
  const [message, setMessage] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const username = useUserName()
  const { setRefresh } = useAppActions()

  const toast = useToast()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    toast({
      title: "Mengirim",
      description: "Pesan sedang dikirim",
      status: "info",
      position: "top",
    })
    if (message.trim() === "") return
    try {
      const messageData = {
        content: message,
        username,
        roomId,
      }
      await createMessage(messageData)
      setMessage("")
      setRefresh()
      toast({
        title: "Berhasil",
        description: "Pesan berhasil dikirim",
        status: "success",
        position: "top",
      })
    } catch (error) {
      console.log(error)
      toast({
        title: "Gagal",
        description: "Pesan gagal dikirim",
        status: "error",
        position: "top",
      })
    }
  }

  return (
    <>
      <ProfileForm isOpen={isOpen} onClose={onClose} />
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Box
          color="brand.white"
          w="100%"
          p={4}
          as="section"
          pos="fixed"
          bottom="0"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          bg="brand.semiBlack"
        >
          <Box onClick={onOpen} cursor="pointer">
            <ProfileIcon width={26} height={26} />
          </Box>
          <Input
            type="text"
            placeholder="Masukkan pesan"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            style={{
              cursor: "pointer",
            }}
          >
            <SendIcon width={26} height={26} />
          </button>
        </Box>
      </form>
    </>
  )
}

export default ChatForm
