import { useMediaQuery } from "@chakra-ui/react";
import { DesktopNavigationBar } from "./desktop";
import { MobileNavigationBar } from "./mobile";

export const NavBar: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 820px)");

  if (isMobile) {
    return <MobileNavigationBar />;
  }

  return <DesktopNavigationBar />;
};
