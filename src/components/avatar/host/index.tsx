import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { HostInfo } from "../../../types";

export const HostAvatar: React.FC<HostInfo> = ({ firstName, memoji }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image src={`/images/${memoji}.png`} width="150px" height="150px" />
      <Heading size="md" textTransform="capitalize">
        {firstName}
      </Heading>
    </Box>
  );
};
