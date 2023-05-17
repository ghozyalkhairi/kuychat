import ChatForm from "@/components/layout/ChatForm"
import ChatList from "@/components/layout/ChatList"
import Header from "@/components/layout/Header"
import { Box } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useState, useEffect } from "react"
import { getMessages } from "@/lib/messageService"
import { useRefresh } from "@/store/appStore"

const Home: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const refresh = useRefresh()

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true)
      const messages = await getMessages()
      setMessages(messages)
      setLoading(false)
    }
    fetchMessages()
  }, [refresh])
  return (
    <>
      <Head>
        <title>KuyChat💬</title>
        <meta name="description" content="KuyChat Disini 💬" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" bg="brand.gray" minH="100vh">
        <Header />
        <ChatList messages={messages} loading={loading} />
        <ChatForm />
      </Box>
    </>
  )
}

export default Home
