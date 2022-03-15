import Image from "next/image";

interface PodcastPlatformProps {
  platform: string;
}

export const PodcastPlatform: React.FC<PodcastPlatformProps> = ({
  platform,
}) => {
  return <Image src={`/images/${platform}.png`} width="50px" height="50px" />;
};
