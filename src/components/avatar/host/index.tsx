import { Box, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HostInfo, HostAvatarImageTypes } from "../../../types";

interface HostAvatarProps {
  host: HostInfo;
  withLastName: boolean;
  imageName?: "default.png" | "hover.png";
}

export const HostAvatar: React.FC<HostAvatarProps> = ({
  host: { firstName, lastName },
  withLastName,
  imageName = "default.png",
}) => {
  const [internalImageName, setInternalImageName] = useState(imageName);

  useEffect(() => {
    setInterval(() => {
      console.log(internalImageName);
      if (internalImageName === "default.png") {
        console.log("running");
        setInternalImageName("hover.png");
      } else {
        setInternalImageName("default.png");
      }
    }, 5000);
  }, [internalImageName]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image
        src={`/images/${firstName}/${internalImageName}`}
        width={["90px", "150px"]}
        height={["90px", "150px"]}
      />
      <Heading fontSize={["md", "lg"]} textTransform="capitalize">
        {firstName} {withLastName && lastName}
      </Heading>
    </Box>
  );
};
