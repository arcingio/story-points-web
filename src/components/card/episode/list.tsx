import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import { EpisodeCard } from ".";
import { Episode } from "../../../types";

interface EpisodeListProps {
  episodes: Episode[];
  withViewAllBtn?: boolean;
  withImages: boolean;
}

export const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  withViewAllBtn,
  withImages,
}) => {
  return (
    <Box flexDirection="column" alignItems="center" gap="10" width="100%">
      {episodes.map((e, i) => {
        if (i === episodes.length - 1) {
          return (
            <EpisodeCard
              key={`${e.title}-container`}
              episode={e}
              withImage={withImages}
            />
          );
        }

        return (
          <Box key={`${e.title}-container`}>
            <EpisodeCard episode={e} withImage={withImages} />
            <Divider marginTop="10" />
          </Box>
        );
      })}
      {withViewAllBtn && (
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          pt="10"
        >
          <Button as="a" href="/all-episodes">
            View All
          </Button>
        </Box>
      )}
    </Box>
  );
};
