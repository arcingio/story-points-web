import { Box } from "@chakra-ui/react";
import { HostAvatar } from ".";
import { hosts } from "../../../constants";

export const HostAvatarList: React.FC = () => {
  const imageOptions: any[] = ["default.png"];

  return (
    <Box flexDirection="row" display="flex" justifyContent="space-evenly">
      {hosts.map((h) => {
        const randomImageNumber = Math.floor(Math.random() * 2);
        return (
          <HostAvatar
            host={h}
            withLastName={false}
            key={`${h.firstName}-avatar`}
            imageName={imageOptions[randomImageNumber]}
          />
        );
      })}
    </Box>
  );
};
