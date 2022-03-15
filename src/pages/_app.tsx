import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";

const SPTheme = extendTheme({
  colors: {
    brand: {
      500: "#4168b1",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={SPTheme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
