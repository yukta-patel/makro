import { extendTheme } from "@chakra-ui/core";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Nunito, sans-serif",
      },
    },
  },
});

export default theme;
