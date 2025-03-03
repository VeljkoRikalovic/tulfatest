import React from "react";
import styles from "./CloseUpShotsModal.module.css";

function GridRow({ leftImage, rightImage, fullImage }) {
  if (fullImage) {
    return (
      <div className={styles.gridRow}>
        <img
          src={fullImage.src}
          alt={fullImage.alt}
          className={fullImage.className}
        />
      </div>
    );
  }

  return (
    <div className={styles.gridRow}>
      <img
        src={leftImage.src}
        alt={leftImage.alt}
        className={leftImage.className}
      />
      <img
        src={rightImage.src}
        alt={rightImage.alt}
        className={rightImage.className}
      />
    </div>
  );
}

export default GridRow;
