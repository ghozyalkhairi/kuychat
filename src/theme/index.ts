import { extendTheme, createMultiStyleConfigHelpers } from "@chakra-ui/react"
import { switchAnatomy } from "@chakra-ui/anatomy"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: "white",
  },
  track: {
    bg: "gray.600",
    _checked: {
      bg: "#FFD953",
    },
  },
})

const switchTheme = defineMultiStyleConfig({ baseStyle })

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

export const theme = extendTheme({
  colors,
  components: {
    Switch: switchTheme,
  },
})
