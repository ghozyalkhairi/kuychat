import ProfileIcon from "@/assets/ProfileIcon"
import SendIcon from "@/assets/SendIcon"
import { Box, useDisclosure, Input } from "@chakra-ui/react"
import { FC, FormEventHandler, useState } from "react"
import ProfileForm from "./ProfileForm"
import { createMessage } from "@/lib/messageService"
import { useUserName } from "@/store/userStore"
import { useAppActions } from "@/store/appStore"

const ChatForm: FC = () => {
  const [message, setMessage] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const username = useUserName()
  const { setRefresh } = useAppActions()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (message.trim() === "") return
    try {
      const messageData = {
        content: message,
        username,
      }
      await createMessage(messageData)
      setMessage("")
      setRefresh()
    } catch (error) {
      console.log(error)
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
          <Box onClick={onOpen}>
            <ProfileIcon width={26} height={26} />
          </Box>
          <Input
            type="text"
            placeholder="Masukkan pesanmu"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Box>
            <SendIcon width={26} height={26} />
          </Box>
        </Box>
      </form>
    </>
  )
}

export default ChatForm
