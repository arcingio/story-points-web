import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Center,
  Text,
  ChakraProvider,
  extendTheme,
  Link,
} from "@chakra-ui/react";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { FeedBackLink } from "../components/feedback";

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
      <Center bg="gray.200" h="48px" color="black">
        <FeedBackLink />
      </Center>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
