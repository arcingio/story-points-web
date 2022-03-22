import { Box, Link, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "All Episodes",
    href: "/all-episodes",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Subscribe",
    href: "/subscribe",
  },
];

interface NavigationLinksProps {
  withDivider: boolean;
  isMobile?: boolean;
  linkColor?: string;
}
export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  withDivider,
  isMobile = true,
  linkColor = "black",
}) => {
  const flexDir = isMobile ? "column" : "row";
  const justifyContent = isMobile ? "start" : "center";
  return (
    <Box
      display="flex"
      flexDirection={flexDir}
      gap="4"
      width="100%"
      alignItems="center"
      justifyContent={justifyContent}
    >
      {links.map((link) => {
        return (
          <>
            <NextLink href={link.href} passHref={true}>
              <Link fontSize="20px" m="0" color={linkColor}>
                {link.title}
              </Link>
            </NextLink>
            {withDivider && <Divider />}
          </>
        );
      })}
    </Box>
  );
};
