import React from "react";
import { ChakraProvider } from "@chakra-ui/core";
// import "../styles/globals.css";
import theme from "./theme";
import { AppProps } from "next/app";

function App({ Component, pageProps }, AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
