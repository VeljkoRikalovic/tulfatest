"use client";
import React from "react";
import styles from "./CloseUpShotsModal.module.css";
import HeroSection from "./HeroSection";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";
import ContentCard from "./ContentCard";

function CloseUpShotsModal() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <ImageSection />
        <TextSection />
        <ContentCard />
      </main>
    </>
  );
}

export default CloseUpShotsModal;
