import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/db"

const message = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const { roomId } = req.query
      const messages = await prisma.message.findMany({
        where: {
          roomId: roomId as string,
        },
      })
      const room = await prisma.room.findUnique({
        where: {
          id: roomId as string,
        },
      })
      res.status(200).json({
        messages,
        room,
      })
      break
    default:
      res.status(405).end()
  }
}

export default message
