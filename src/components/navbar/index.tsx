import { useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { DesktopNavigationBar } from "./desktop";
import { MobileNavigationBar } from "./mobile";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const bg = isHome ? "white" : "brand.500";
  const headingColor = isHome ? "brand.500" : "white";
  const linkColor = isHome ? "black" : "white";
  const [display, setDisplay] = useState("none");
  const [isMobile] = useMediaQuery("(max-width: 820px)");

  if (isMobile) {
    return <MobileNavigationBar />;
  }

  return <DesktopNavigationBar />;
};
