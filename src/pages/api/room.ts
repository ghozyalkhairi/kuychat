import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/db"

const room = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const rooms = await prisma.room.findMany({
        orderBy: {
          createdAt: "asc",
        },
      })
      res.status(200).json(rooms)
      break
    case "POST":
      const { roomBody } = req.body
      const { name, isPrivate, password } = roomBody as RoomDraft
      const room = await prisma.room.create({
        data: {
          name,
          isPrivate,
          password,
        },
      })
      res.status(200).json(room)
      break
    default:
      res.status(405).end()
  }
}

export default room
