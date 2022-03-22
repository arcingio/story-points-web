import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SocialList } from "../socials";
import { NavigationLinks } from "./links";

export const DesktopNavigationBar: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const bg = isHome ? "white" : "brand.500";
  const headingColor = isHome ? "brand.500" : "white";
  const linkColor = isHome ? "black" : "white";

  return (
    <Box
      display="flex"
      bg={bg}
      h={["150px", "150px"]}
      paddingX={["20px", "20px", "60px", "150px"]}
      paddingY={["10px"]}
      justifyContent={["space-between"]}
      alignItems="center"
      gap={[0, 6]}
    >
      <Heading
        color={headingColor}
        fontSize={["50px"]}
        wordBreak="keep-all"
        display="inline"
      >
        Story Points
      </Heading>
      <NavigationLinks withDivider={false} isMobile={false} />
      <SocialList />
    </Box>
  );
};
