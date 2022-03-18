import {
  Box,
  Heading,
  IconButton,
  useMediaQuery,
  Link,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { SocialList } from "../socials";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const bg = isHome ? "white" : "brand.500";
  const headingColor = isHome ? "brand.500" : "white";
  const linkColor = isHome ? "black" : "white";
  const [isMobile] = useMediaQuery("(max-width: 820px)");

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
      {isMobile ? (
        <IconButton aria-label="navbutton" icon={<HamburgerIcon />} />
      ) : (
        <Box
          display="flex"
          width="60%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="row" gap={4}>
            <NextLink href="/" passHref={true}>
              <Link fontSize="20px" m="0" color={linkColor}>
                Home
              </Link>
            </NextLink>
            <NextLink href="/all-episodes" passHref={true}>
              <Link fontSize="20px" m="0" color={linkColor}>
                All Episodes
              </Link>
            </NextLink>
            <NextLink href="/about" passHref={true}>
              <Link fontSize="20px" m="0" color={linkColor}>
                About
              </Link>
            </NextLink>
            <NextLink href="/subscribe" passHref={true}>
              <Link fontSize="20px" m="0" color={linkColor}>
                Subscribe
              </Link>
            </NextLink>
          </Box>
          <SocialList />
        </Box>
      )}
    </Box>
  );
};
