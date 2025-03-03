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
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8f58497881417171164ec69a8ad04cf7d5bad2"
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
