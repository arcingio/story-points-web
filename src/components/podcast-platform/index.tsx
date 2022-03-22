import { Image } from "@chakra-ui/react";

interface PodcastPlatformProps {
  platform: string;
  link: string;
}

export const PodcastPlatform: React.FC<PodcastPlatformProps> = ({
  platform,
  link,
}) => {
  return (
    <Image
      src={`/images/${platform}.png`}
      width={["35px", "50px"]}
      height={["35px", "50px"]}
      onClick={() => {
        window.open(link, "_blank");
      }}
      alt=""
      cursor="pointer"
    />
  );
};
