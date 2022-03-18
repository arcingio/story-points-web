import { Box, Image } from "@chakra-ui/react";
import { instagramURL, twitterURL } from "../../constants";

export const SocialList = () => {
  const socials = [
    { src: "/images/socials/instagram.png", link: instagramURL },
    { src: "/images/socials/twitter.png", link: twitterURL },
    { src: "/images/socials/tik-tok.png", link: twitterURL },
  ];
  return (
    <Box display="flex" gap="4" w="100px">
      {socials.map((s) => {
        return (
          <Image
            cursor="pointer"
            key={s.src}
            src={s.src}
            width="25px"
            height="25px"
            onClick={() => {
              window.open(s.link, "_blank");
            }}
          />
        );
      })}
    </Box>
  );
};
