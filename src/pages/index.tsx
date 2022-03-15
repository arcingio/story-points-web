import { Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ListOfPodcatPlatforms } from "../components/podcast-platform/list";
import { HostAvatarList } from "../components/avatar/host/list";

interface HomePageProps {
  latestEpisodes: [];
}

const Home: NextPage<HomePageProps> = ({ latestEpisodes }) => {
  return (
    <Box>
      <Head>
        <title>Story Points Podcast: Stories About Software Engineering</title>
        <meta
          name="description"
          content="Story Points Podcase: Stories About Software Engineering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        minHeight="70vh"
        bg="brand.500"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        width="100%"
        color="white"
      >
        <Box width="600px">
          <Heading textShadow="2xl" size="2xl" wordBreak="break-word">
            A podcast to help the anybody learn more about the tech industry.
          </Heading>
        </Box>
        <HostAvatarList />
        <Box width="600px" gap="6" display="flex" flexDirection="column">
          <Heading>Listen to Story Points on:</Heading>
          <ListOfPodcatPlatforms />
        </Box>
      </Box>
      <Box
        minHeight="300px"
        paddingX={["20px", "20px", "60px", "150px"]}
        paddingY={["100px"]}
      >
        <Heading size="2xl">Latest episodes</Heading>
      </Box>
    </Box>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      latestEpisodes: [],
    },
  };
};

export default Home;
