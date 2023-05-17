// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/db"

const message = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const messages = await prisma.message.findMany({
        orderBy: {
          createdAt: "asc",
        },
      })
      res.status(200).json(messages)
      break
    case "POST":
      const { messageBody } = req.body
      const { username, content } = messageBody as MessageDraft
      const message = await prisma.message.create({
        data: {
          username,
          content,
        },
      })
      res.status(200).json(message)
  }
}

export default message
