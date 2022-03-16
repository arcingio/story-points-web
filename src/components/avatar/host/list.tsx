import { Box } from "@chakra-ui/react";
import { HostAvatar } from ".";
import { hosts } from "../../../constants";

export const HostAvatarList: React.FC = () => {
  return (
    <Box flexDirection="row" display="flex" justifyContent="space-evenly">
      {hosts.map((h) => {
        return (
          <HostAvatar
            host={h}
            withLastName={false}
            key={`${h.firstName}-avatar`}
          />
        );
      })}
    </Box>
  );
};
