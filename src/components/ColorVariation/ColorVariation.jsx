import { useState } from "react";
import styles from "./ColorVariation.module.css";

function ColorVariation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a3d5d3b79bae1a5b34e266c2b193985e041c1aef89d04b6ff8f8ea19656d665b?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a3d5d3b79bae1a5b34e266c2b193985e041c1aef89d04b6ff8f8ea19656d665b?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a3d5d3b79bae1a5b34e266c2b193985e041c1aef89d04b6ff8f8ea19656d665b?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30",
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.colorVariation}>
      <div className={styles.imageContainer}>
        <img
          src={images[activeIndex]}
          alt="Color variation display"
          className={styles.img}
          loading="lazy"
        />

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`View color variation ${index + 1}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ColorVariation;
