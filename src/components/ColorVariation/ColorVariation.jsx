import { useState } from "react";
import styles from "./ColorVariation.module.css";

function ColorVariation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/static/images/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom.png",
    "/static/images/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom.png",
    "/static/images/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom.png",
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
              style={{
                background:
                  (index == 0 && "orange") ||
                  (index == 1 && "#410c85") ||
                  (index == 2 && "yellow"),
              }}
              onClick={() => handleDotClick(index)}
              aria-label={`View color variation ${index + 1}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
      <div className={styles.imageContainerTwo}>
        <img
          src={images[activeIndex]}
          alt="Color variation display"
          className={styles.img}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default ColorVariation;
