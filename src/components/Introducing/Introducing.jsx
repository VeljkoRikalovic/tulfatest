import React, { useEffect, useRef, useState } from "react";
import styles from "./Introducing.module.css";

function Introducing() {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Get the element's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the element is in view
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementBottom = elementTop + elementHeight;

      // Element is in view
      if (elementBottom > 0 && elementTop < viewportHeight) {
        // Calculate scroll progress (0 to 1)
        const scrollProgress =
          1 - elementBottom / (viewportHeight + elementHeight);

        // Calculate scale based on scroll progress (1 to 1.2)
        // Only the image will scale, any text would remain unaffected
        const newScale = 1 + scrollProgress * 0.2;
        setScale(newScale);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.cta1}>
      <div className={styles.imageContainer}>
        <img
          ref={imageRef}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c14fe0145b967d7bbca7e68cc4c71b99782aa8140bd20dd87b049e064228332?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30"
          className={styles.img}
          alt="CTA banner"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </section>
  );
}

export default Introducing;
