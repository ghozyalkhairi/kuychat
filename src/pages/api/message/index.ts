import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/db"

const message = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { messageBody } = req.body
      const message = await prisma.message.create({
        data: messageBody,
      })
      res.status(200).json(message)
      break
    default:
      res.status(405).end()
  }
}

export default message
