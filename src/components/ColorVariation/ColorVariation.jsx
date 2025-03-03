import { useState } from "react";
import styles from "./ColorVariation.module.css";

function ColorVariation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "public/static/images/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom.png",
    "public/static/images/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom.png",
    "public/static/images/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom.png",
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
