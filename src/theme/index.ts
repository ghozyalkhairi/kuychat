import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    primary: "#FFD953",
    black: "#000000",
    gray: "#303030",
    semiBlack: "rgba(0, 0, 0, 0.3)",
    white: "#FFFFFF",
    lightGray: "#505050",
  },
}

export const theme = extendTheme({ colors })
