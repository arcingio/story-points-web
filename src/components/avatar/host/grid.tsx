import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { HostAvatar } from ".";
import { hosts } from "../../../constants";

export const HostBioGrid: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={10} width="70vw">
      {hosts.map((h) => {
        return (
          <Box key={`${h.firstName}`} borderWidth="1px" borderRadius="lg">
            <HostAvatar host={h} withLastName={true} />
            <Text margin="8">{h.bio}</Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
