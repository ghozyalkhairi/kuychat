import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"

const Header: FC = () => {
  return (
    <Box
      as="header"
      bg="brand.semiBlack"
      color="brand.primary"
      w="100%"
      pos="fixed"
      top="0"
    >
      <Text as="h1" fontSize="md" textAlign="center" py={4}>
        KuyChat💬
        <Text as="span" color="brand.white">
          {" "}
          by GhozyAlkhairi
        </Text>
      </Text>
    </Box>
  )
}

export default Header
