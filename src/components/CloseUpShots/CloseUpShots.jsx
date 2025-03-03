import { useState } from "react";
import styles from "./CloseUpShots.module.css";
import CloserLookButton from "./CloserLookButton";
import MainImageSection from "./MainImageSection";
import Modal from "../Modal";
import CloseUpShotsModal from "./CloseUpShotsModal/CloseUpShotsModal";

function CloseUpShots() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Close up shots</h1>
      </header>

      <MainImageSection
        imageUrl="public\view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc.jpg"
        altText="Brown leather couch with green pillows"
      />
      <footer className={styles.footerSection}>
        <CloserLookButton onOpen={openModal} />
        <p className={styles.footerText}>
          Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac.
          Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit
          nulla eget
        </p>
      </footer>

      <Modal size={100} isOpen={isModalOpen} onClose={closeModal}>
        <CloseUpShotsModal />
      </Modal>
    </main>
  );
}

export default CloseUpShots;
