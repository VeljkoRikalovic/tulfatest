import React from "react";
import styles from "./CloseUpShotsModal.module.css";

function ImageSection() {
  return (
    <section className={styles.imageSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d10d365a54c3b1b173974f6c0a82a03855be348"
        alt="Interior design showcase"
        className={styles.fullWidthImage}
      />
    </section>
  );
}

export default ImageSection;
