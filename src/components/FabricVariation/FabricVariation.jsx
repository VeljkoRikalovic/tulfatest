"use client";
import React, { useState } from "react";
import styles from "./FabricVariation.module.css";
import FabricCard from "./FabricCard";

function FabricVariation() {
  const [selectedFabric, setSelectedFabric] = useState(0);

  const fabricOptions = [
    {
      name: "Prints",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1f937e39ab74dd1d5bdb3fb70e702e63c7d0eccafd9a431f3df742ac2b164138?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30",
      imageClassName: styles.img3,
      sofaImageSrc:
        "/static/images/blue-sofa-on-white-background-2023-11-27-05-35-36-utc-Photoroom.png",
    },
    {
      name: "Leathers",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee17465fd332ba4ef0f54ee06281f7529e0cfe9fdce6a0004824bc38a41cd208?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30",
      imageClassName: styles.img4,
      sofaImageSrc:
        "public/static/images/grey-sofa-on-white-background-2024-10-23-17-40-37-utc-Photoroom.png",
    },
    {
      name: "Embroidery",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff5583b11e5f3a6a095ac319dcef3a0b593133dbbd26db0ad1dbeb0facdfa560?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30",
      imageClassName: styles.img5,
      sofaImageSrc:
        "static/images/violet-sofa-2023-11-27-05-16-21-utc-Photoroom.png",
    },
  ];

  const handleFabricSelect = (index) => {
    setSelectedFabric(index);
  };

  return (
    <section className={styles.fabricsVariation}>
      <div className={styles.inside}>
        <article className={styles.left}>
          <img
            src={fabricOptions[selectedFabric].sofaImageSrc}
            alt={`Sofa with ${fabricOptions[selectedFabric].name} fabric`}
            className={styles.img}
          />
        </article>
        <aside className={styles.div}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/533f440d3208775efe3358b6fc03c23d5c9136961034c1375ba1f95a06cae427?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30"
            alt="Background pattern"
            className={styles.img2}
          />
          <div className={styles.fabrics}>
            {fabricOptions.map((fabric, index) => (
              <FabricCard
                key={index}
                name={fabric.name}
                imageSrc={fabric.imageSrc}
                imageClassName={fabric.imageClassName}
                isSelected={selectedFabric === index}
                onClick={() => handleFabricSelect(index)}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default FabricVariation;
