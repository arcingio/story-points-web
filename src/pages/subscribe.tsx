import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { ListOfPodcatPlatforms } from "../components/podcast-platform/list";

interface SubscribePageProps {}

const SubscribePage: NextPage<SubscribePageProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="70vh"
      alignItems="center"
      justifyContent="start"
      gap="8"
      marginY="10"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        gap="8"
        marginY="10"
      >
        <Heading>Subscribe</Heading>
        <Box fontSize="lg">
          The Story Points podcast is available on all the great podcast
          services you like to listen to your podcasts on. Make sure to
          subscribe to get the latest episodes!
        </Box>
        <ListOfPodcatPlatforms />
      </Box>
    </Box>
  );
};

export default SubscribePage;
