import { Box } from "@chakra-ui/react";
import { HostAvatar } from ".";

export const HostAvatarList: React.FC = () => {
  //TODO: Remove hard code
  const hosts = [
    {
      firstName: "roger",
      lastName: "king",
      memoji: "roger-memoji",
    },
    {
      firstName: "joseph",
      lastName: "micceri",
      memoji: "roger-memoji",
    },
    {
      firstName: "george",
      lastName: "markantonis",
      memoji: "roger-memoji",
    },
    {
      firstName: "greg",
      lastName: "meade",
      memoji: "roger-memoji",
    },
  ];
  return (
    <Box flexDirection="row" display="flex" justifyContent="space-evenly">
      {hosts.map((h) => {
        return <HostAvatar {...h} key={`${h.firstName}-avatar`} />;
      })}
    </Box>
  );
};
