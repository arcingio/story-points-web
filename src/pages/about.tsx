import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { HostBioGrid } from "../components/avatar/host/grid";

const AboutPage: NextPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginY="10"
      flexDirection="column"
      gap="6"
      marginX={["20px", "20px", "60px", "150px"]}
      minHeight="70vh"
    >
      <Box width="70vw" fontSize="lg">
        Here at Story Points, we share personal anecdotes from within the tech
        industry and help break it down for those who are not, with some
        inevitable silliness in between. So whether you’re looking to get into
        the field, already in the field, or just a tad curious about it, look no
        further.
        <br /> <br />
        The Story Points podcast is recorded on a regular basis and releases new
        episodes on a bi-weekly basis.
      </Box>
      <HostBioGrid />
      <Box>
        You can email us at <Link as="u">storypoints.dev@gmail.com</Link>
      </Box>
    </Box>
  );
};
export default AboutPage;
