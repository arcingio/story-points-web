import { Box } from "@chakra-ui/react";
import { PodcastPlatform } from ".";

export const ListOfPodcatPlatforms: React.FC = () => {
  const platforms = ["spotify", "podcast"];

  return (
    <Box gap="6" display="flex">
      {platforms.map((p) => {
        return <PodcastPlatform key={p} platform={p} />;
      })}
    </Box>
  );
};
