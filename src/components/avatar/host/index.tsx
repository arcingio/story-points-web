import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { HostInfo } from "../../../types";

export const HostAvatar: React.FC<HostInfo> = ({ firstName }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image
        src={`/images/${firstName}/default.png`}
        width="150px"
        height="150px"
      />
      <Heading size="md" textTransform="capitalize">
        {firstName}
      </Heading>
    </Box>
  );
};
