import { Box, Heading, IconButton, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavBar: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      display="flex"
      h={["150px", "150px"]}
      paddingX={["20px", "20px", "60px", "150px"]}
      paddingY={["10px"]}
      justifyContent={["space-between", "start"]}
      alignItems="center"
      gap={[0, 6]}
    >
      <Heading color={`brand.500`} size="3xl">
        Story Points
      </Heading>
      {isMobile ? (
        <IconButton aria-label="navbutton" icon={<HamburgerIcon />} />
      ) : (
        <Box display="flex" flexDirection="row" gap={4}>
          <Heading size="md" m="0">
            Home
          </Heading>
          <Heading size="md" m="0">
            Episodes
          </Heading>
          <Heading size="md" m="0">
            About
          </Heading>
          <Heading size="md" m="0">
            Subscribe
          </Heading>
        </Box>
      )}
    </Box>
  );
};
