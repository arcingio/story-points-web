import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { DateTime, Duration } from "luxon";

import { ListOfPodcatPlatforms } from "../../podcast-platform/list";
import { Episode } from "../../../types";

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Box display="flex" gap="6" flexDir="column" marginX="32">
      <Heading as="u">{episode.title}</Heading>
      <Box
        boxSize="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Image
          src="/images/WFH-meme.jpg"
          alt="story_points_logo"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </Box>
      <Text>{episode.description}</Text>
      <Box display="flex" flexDir="row" gap="6" alignItems="center">
        <Box display="flex" alignItems="center" gap="2">
          <TimeIcon />
          <Text size="lg">
            {Duration.fromObject({
              milliseconds: episode.audio.duration,
            }).toFormat("hh:mm:ss")}
          </Text>
        </Box>
        <Text>
          {DateTime.fromISO(episode.publishDate).toFormat("MMMM dd, yyyy")}
        </Text>
      </Box>
      <ListOfPodcatPlatforms />
    </Box>
  );
};
