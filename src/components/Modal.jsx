"use client";
import React, { useEffect } from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, title, children, size }) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modalOverlay} ${
        isOpen ? styles.modalOverlayVisible : ""
      }`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div
        className={styles.modalContainer}
        style={{ maxWidth: size && `${size}vw` }}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {title && (
          <h2 id="modal-title" className={styles.modalTitle}>
            {title}
          </h2>
        )}

        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
