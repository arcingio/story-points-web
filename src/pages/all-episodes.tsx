import { Box } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { EpisodeList } from "../components/card/episode/list";
import { Episode } from "../types";

interface AllEpisodesPageProps {
  episodes: Episode[];
}

const AllEpisodesPage: NextPage<AllEpisodesPageProps> = ({ episodes }) => {
  return (
    <Box
      paddingY="10"
      minHeight="70vh"
      paddingX={["20px", "20px", "60px", "150px"]}
    >
      <EpisodeList episodes={episodes} withImages={false} />
    </Box>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/feed");
  return {
    props: {
      episodes: data || [],
    },
  };
};

export default AllEpisodesPage;
