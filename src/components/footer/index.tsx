import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with love by Story Points Podcast
      </a>
    </footer>
  );
};
