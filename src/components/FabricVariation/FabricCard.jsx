import React from "react";
import styles from "./FabricVariation.module.css";

function FabricCard({ name, imageSrc, imageClassName, isSelected, onClick }) {
  return (
    <article
      className={`${styles.cardFabric} ${
        isSelected ? styles.selectedCard : ""
      }`}
      onClick={onClick}
    >
      <h3 className={styles.loremIpsum}>{name}</h3>
      <img
        src={imageSrc}
        alt={`${name} fabric option`}
        className={imageClassName}
      />
    </article>
  );
}

export default FabricCard;
