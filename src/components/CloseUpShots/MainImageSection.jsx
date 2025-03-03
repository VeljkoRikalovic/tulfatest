import React, { useState, useEffect, useRef } from "react";
import styles from "./CloseUpShots.module.css";

function MainImageSection({ imageUrl, altText }) {
  const [scale, setScale] = useState(1.2); // Start with a slightly zoomed in image
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Get the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how far the section is through the viewport
      // When the section first enters the viewport from the bottom, progress = 0
      // When the section is centered in the viewport, progress = 0.5
      // When the section is about to leave the viewport at the top, progress = 1
      const progress =
        1 - (sectionTop + sectionHeight) / (viewportHeight + sectionHeight);

      // Clamp progress between 0 and 1
      const clampedProgress = Math.max(0, Math.min(progress, 1));

      // Calculate scale: start at 1.2 (zoomed in) and end at 1.0 (normal size)
      const newScale = 1.2 - clampedProgress * 0.2;

      setScale(newScale);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial position
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.mainImageSection}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={altText}
          className={styles.mainImage}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </section>
  );
}

export default MainImageSection;
