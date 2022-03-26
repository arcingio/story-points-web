import { Box } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import useSWR from "swr";
import { EpisodeList } from "../components/card/episode/list";
import { fetcher } from "../constants";
import { Episode } from "../types";

interface AllEpisodesPageProps {}

const AllEpisodesPage: NextPage<AllEpisodesPageProps> = () => {
  const { data } = useSWR("/api/feed", fetcher);
  return (
    <Box
      paddingY="10"
      minHeight="70vh"
      paddingX={["20px", "20px", "60px", "150px"]}
    >
      {data && <EpisodeList episodes={data} withImages={false} />}
    </Box>
  );
};

export default AllEpisodesPage;
