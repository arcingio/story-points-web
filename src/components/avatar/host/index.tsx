import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { HostInfo } from "../../../types";

interface HostAvatarProps {
  host: HostInfo;
  withLastName: boolean;
}

export const HostAvatar: React.FC<HostAvatarProps> = ({
  host: { firstName, lastName },
  withLastName,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image
        src={`/images/${firstName}/default.png`}
        width="150px"
        height="150px"
      />
      <Heading size="md" textTransform="capitalize">
        {firstName} {withLastName && lastName}
      </Heading>
    </Box>
  );
};
