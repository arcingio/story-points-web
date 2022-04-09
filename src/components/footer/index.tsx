import { Center } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import { FeedBackLink } from "../feedback";

export const Footer: React.FC = () => {
  return (
    <Center
      flexDirection="column"
      borderTop="1px"
      borderColor="#eaeaea"
      height="80px"
    >
      Made with love by Story Points Podcast
      <FeedBackLink />
    </Center>
  );
};
