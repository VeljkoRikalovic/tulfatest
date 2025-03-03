import { useState } from "react";
import Modal from "../Modal";
import styles from "./ProductSilos.module.css";
import Caroseul from "./Caroseul";

function ProductSilos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={styles.container}>
        <article className={styles.content}>
          <h1 className={styles.title}>Product Silos</h1>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={openModal}
              aria-haspopup="dialog"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b"
                alt=""
                className={styles.plusIcon}
              />
              <span className={styles.buttonText}>Take a closer look</span>
            </button>
          </div>
        </article>
        <figure>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7770f3a68021466e263923cbed9ac5ffa5239f0e"
            alt="Product silos illustration"
            loading="lazy"
            className={styles.mainImage}
          />
        </figure>
      </section>

      <Modal
        title=" Ultra-high-definition images of your furniture shot from different
            angles."
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Caroseul />
      </Modal>
    </>
  );
}

export default ProductSilos;
