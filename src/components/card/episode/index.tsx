import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { DateTime, Duration } from "luxon";

import { ListOfPodcatPlatforms } from "../../podcast-platform/list";
import { Episode } from "../../../types";
import { useState } from "react";

interface EpisodeCardProps {
  episode: Episode;
  withImage: boolean;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  withImage,
}) => {
  const [randomColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );
  return (
    <Box display="flex" gap="6" flexDir="column">
      {/* TODO: Refactor this to pull the meme promotional image */}
      {withImage && (
        <Box
          boxSize="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          bg={randomColor}
          color="gray.300"
        >
          <Heading>{episode.title}</Heading>
        </Box>
      )}
      <Heading as="u">{episode.title}</Heading>
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
      <Box display="flex" flexDirection="column" gap="2">
        <Text as="i">Listen on:</Text>
        <ListOfPodcatPlatforms />
      </Box>
    </Box>
  );
};
