import React from "react";
import styles from "./CloseUpShotsModal.module.css";
import GridRow from "./GridRow";

function ImageGrid() {
  return (
    <div className={styles.imageGrid}>
      <GridRow
        leftImage={{
          src: "/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc.jpg",
          alt: "Interior 1",
          className: styles.gridImageSmall,
        }}
        rightImage={{
          src: "/lounge-room-2024-01-22-18-27-58-utc.jpg",
          alt: "Interior 2",
          className: styles.gridImageLarge,
        }}
      />

      <GridRow
        leftImage={{
          src: "/1.jpg",
          alt: "Interior 3",
          className: styles.gridImageLarge,
        }}
        rightImage={{
          src: "/lounge-room-2024-01-22-18-27-58-utc (1).jpg",
          alt: "Interior 4",
          className: styles.gridImageSmall,
        }}
      />

      <GridRow
        fullImage={{
          src: "/lounge-room-2024-01-22-18-27-58-utc (2).jpg",
          alt: "Interior 5",
          className: styles.gridImageFull,
        }}
      />

      <GridRow
        leftImage={{
          src: "/screw-for-furniture-assembly-close-up-2023-11-27-04-51-33-utc.jpg",
          alt: "Interior 6",
          className: styles.gridImageSmall,
        }}
        rightImage={{
          src: "/stylish-chest-of-drawers-close-up-furniture-for-2024-01-18-18-28-52-utc.jpg",
          alt: "Interior 7",
          className: styles.gridImageLarge,
        }}
      />

      <GridRow
        fullImage={{
          src: "/2.jpg",
          alt: "Interior 8",
          className: styles.gridImageFull,
        }}
      />
    </div>
  );
}

export default ImageGrid;
