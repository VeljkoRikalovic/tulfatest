import React, { useState, useEffect, useRef } from "react";
import styles from "./LifestyleCTA.module.css";

function LifestyleCTA() {
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
    <section className={styles.lifestyleCta}>
      <div className={styles.div}>
        <div className={styles.imageContainer}>
          <img
            ref={sectionRef}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd66542b800791b813f82eff5486cd8e6ad3a46dbdc7188511efe40973e9df8d?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30"
            alt="Lifestyle background"
            loading="lazy"
            className={styles.img}
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
        <h2 className={styles.div2}>Lifestyle Scenes</h2>
      </div>
    </section>
  );
}

export default LifestyleCTA;
