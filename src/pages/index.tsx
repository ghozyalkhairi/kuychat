import Header from "@/components/layout/Header"
import { Box } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useState, useEffect } from "react"
import { getRooms } from "@/lib/roomService"
import { useRefresh } from "@/store/appStore"
import RoomList from "@/components/layout/RoomList"
import RoomCreator from "@/components/layout/RoomCreator"

const Home: NextPage = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(false)

  const refresh = useRefresh()

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true)
      const rooms = await getRooms()
      setRooms(rooms)
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
        <RoomCreator />
        <RoomList rooms={rooms} loading={loading} />
      </Box>
    </>
  )
}

export default Home
