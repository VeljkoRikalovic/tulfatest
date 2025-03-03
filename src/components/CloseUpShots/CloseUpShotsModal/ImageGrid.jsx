import React from "react";
import styles from "./CloseUpShotsModal.module.css";
import GridRow from "./CloseUpShotsModal/GridRow";

function ImageGrid() {
  return (
    <div className={styles.imageGrid}>
      <GridRow
        leftImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/757460798c5941ec661aa53efa66472873e9dfeb",
          alt: "Interior 1",
          className: styles.gridImageSmall,
        }}
        rightImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/75e660bbada66b2473cce9800d2c75d15faa1499",
          alt: "Interior 2",
          className: styles.gridImageLarge,
        }}
      />

      <GridRow
        leftImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7af3068b78cc9b363029180115798fa0a1751d75",
          alt: "Interior 3",
          className: styles.gridImageLarge,
        }}
        rightImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a515958dc1e974fb210640f1161a756b78253d17",
          alt: "Interior 4",
          className: styles.gridImageSmall,
        }}
      />

      <GridRow
        fullImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0105bf65c4fcde56242a40432018299cf082dd4",
          alt: "Interior 5",
          className: styles.gridImageFull,
        }}
      />

      <GridRow
        leftImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68d14b024f4c68a50f2f9b7bf135b8185b0df7a7",
          alt: "Interior 6",
          className: styles.gridImageSmall,
        }}
        rightImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa1b5d5b09469a40219843d50cb289e58d6fb90b",
          alt: "Interior 7",
          className: styles.gridImageLarge,
        }}
      />

      <GridRow
        fullImage={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/364ec5650d48d1202d9b4acd1fac661f1bf38ac7",
          alt: "Interior 8",
          className: styles.gridImageFull,
        }}
      />
    </div>
  );
}

export default ImageGrid;
