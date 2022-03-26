import { Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";

import { ListOfPodcatPlatforms } from "../components/podcast-platform/list";
import { HostAvatarList } from "../components/avatar/host/list";
import { EpisodeList } from "../components/card/episode/list";
import { fetcher } from "../constants";

const Home: NextPage<{}> = () => {
  const { data } = useSWR("/api/feed/latest", fetcher);
  return (
    <Box borderWidth={"1"}>
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
        color="white"
        paddingX={["20px", "20px", "60px", "150px"]}
      >
        <Box width={["100%", "600px"]}>
          <Heading textShadow="2xl" size="2xl" wordBreak="break-word">
            A podcast to help the anybody learn more about the tech industry.
          </Heading>
        </Box>
        <HostAvatarList />
        <Box
          width={["100%", "600px"]}
          gap="6"
          display="flex"
          flexDirection="column"
        >
          <Heading>Listen to Story Points on:</Heading>
          <ListOfPodcatPlatforms />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        minHeight="300px"
        paddingX={["20px", "20px", "60px", "150px"]}
        paddingY={["100px"]}
        gap="10"
        width="100%"
      >
        <Heading size="2xl">Latest episodes</Heading>
        {data && (
          <EpisodeList
            episodes={data}
            withViewAllBtn={true}
            withImages={true}
          />
        )}
      </Box>
    </Box>
  );
};

export default Home;
