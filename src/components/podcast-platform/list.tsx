import { Box } from "@chakra-ui/react";
import { PodcastPlatform } from ".";
import { applePodcastURL, spotifyURL } from "../../constants";

export const ListOfPodcatPlatforms: React.FC = () => {
  const platforms = [
    {
      name: "spotify",
      link: spotifyURL,
    },
    {
      name: "podcast",
      link: applePodcastURL,
    },
  ];

  return (
    <Box gap="6" display="flex">
      {platforms.map((p) => {
        return <PodcastPlatform key={p.name} platform={p.name} link={p.link} />;
      })}
    </Box>
  );
};
