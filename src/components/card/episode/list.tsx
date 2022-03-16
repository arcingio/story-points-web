import { Box, Button, Divider } from "@chakra-ui/react";
import { EpisodeCard } from ".";
import { Episode } from "../../../types";

interface EpisodeListProps {
  episodes: Episode[];
  withViewAllBtn?: boolean;
}

export const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  withViewAllBtn,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="10">
      {episodes.map((e, i) => {
        if (i === episodes.length - 1) {
          return <EpisodeCard key={`${e.title}-container`} episode={e} />;
        }

        return (
          <Box key={`${e.title}-container`}>
            <EpisodeCard episode={e} />
            <Divider marginX="32" marginTop="10" />
          </Box>
        );
      })}
      {withViewAllBtn && <Button size="lg">View All</Button>}
    </Box>
  );
};
