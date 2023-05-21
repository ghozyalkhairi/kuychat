import BackIcon from "@/assets/BackIcon"
import { Link } from "@chakra-ui/next-js"
import { Box, Button, Text } from "@chakra-ui/react"

import { FC } from "react"

interface Props {
  isRoom?: boolean
  roomName?: string
}

const Header: FC<Props> = ({ isRoom, roomName }) => {
  return (
    <Box
      as="header"
      bg="brand.semiBlack"
      color="brand.primary"
      w="100%"
      pos="fixed"
      top="0"
    >
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px="4"
      >
        {isRoom && (
          <Link href="/" textDecoration="none">
            <BackIcon width={28} height={28} />
          </Link>
        )}
        <Text w="100%" as="h1" fontSize="md" textAlign="center" py={4}>
          {isRoom ? (
            <>
              {
                <Text as="span" color="brand.white">
                  {roomName}
                </Text>
              }
            </>
          ) : (
            <Text color="brand.primary">
              KuyChat💬
              <Text as="span" color="brand.white">
                {" "}
                by GhozyAlkhairi
              </Text>
            </Text>
          )}
        </Text>
      </Box>
    </Box>
  )
}

export default Header
