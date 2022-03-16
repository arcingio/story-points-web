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
        Story Points is brought to you by a group of friends who are want to
        help others get more knowledge of working in the tech industry. Roger,
        Joe, and George are Software Engineers with experience from all
        industries and stages of start ups. No matter your level of experience,
        we take our stories and experience in hopes to help you navigate through
        the tech industry.
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
