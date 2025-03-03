"use client";
import React from "react";
import styles from "./CloseUpShotsModal.module.css";

function CardHeader() {
  const handleClose = () => {
    // Handle close functionality
    console.log("Close button clicked");
  };

  return (
    <header className={styles.cardHeader}>
      <img
        src="/view-of-a-modern-lounge-room-2024-05-27-19-05-26-utc.jpg"
        alt="Header image"
        className={styles.headerImage}
      />
      <button
        onClick={handleClose}
        className={styles.closeButton}
        aria-label="Close"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eca9a29c134e6f0c2e18b7a4588e0cdd2327a871"
          alt="Close"
          className={styles.closeIcon}
        />
      </button>
    </header>
  );
}

export default CardHeader;
