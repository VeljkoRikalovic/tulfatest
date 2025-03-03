import React from "react";
import styles from "./CloseUpShotsModal.module.css";
import ImageGrid from "./ImageGrid";

function CardContent() {
  return (
    <div className={styles.cardContent}>
      <p className={styles.contentText}>
        Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum ornare.
      </p>
      <ImageGrid />
    </div>
  );
}

export default CardContent;
