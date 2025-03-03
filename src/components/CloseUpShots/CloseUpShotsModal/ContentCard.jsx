"use client";
import React from "react";
import styles from "./CloseUpShotsModal.module.css";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

function ContentCard() {
  return (
    <article className={styles.contentCard}>
      <CardHeader />
      <CardContent />
    </article>
  );
}

export default ContentCard;
