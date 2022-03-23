import { Box, Heading, IconButton, Flex } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { SocialList } from "../socials";
import { useState } from "react";
import { NavigationLinks } from "./links";

export const MobileNavigationBar: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const bg = isHome ? "white" : "brand.500";
  const headingColor = isHome ? "brand.500" : "white";
  const linkColor = isHome ? "black" : "white";
  const [display, setDisplay] = useState("none");

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
      <IconButton
        aria-label="navbutton"
        icon={<HamburgerIcon />}
        onClick={() => {
          setDisplay("flex");
        }}
      />
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        alignItems="center"
        gap="10"
      >
        <Box
          display="flex"
          bg={"brand.500"}
          h={["150px", "150px"]}
          paddingX={["20px", "20px", "60px", "150px"]}
          paddingY={["10px"]}
          w="100%"
          justifyContent={["space-between"]}
          alignItems="center"
          gap={[0, 6]}
        >
          <Heading
            color={"white"}
            fontSize={["50px"]}
            wordBreak="keep-all"
            display="inline"
          >
            Story Points
          </Heading>
          <IconButton
            aria-label="navbutton"
            icon={<CloseIcon />}
            onClick={() => {
              setDisplay("none");
            }}
          />
        </Box>

        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          gap={6}
        >
          <NavigationLinks
            withDivider={true}
            onChange={() => setDisplay("none")}
          />
          <SocialList />
        </Flex>
      </Flex>
    </Box>
  );
};
