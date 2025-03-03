import styles from "./CloseUpShots.module.css";

function CloserLookButton({ onOpen }) {
  return (
    <button onClick={onOpen} className={styles.closerLookButton}>
      <div className={styles.buttonContent}>
        <span className={styles.buttonText}>Take a closer look</span>
        <div className={styles.iconCircle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d2fc2e2489900d695aba89f1bcc5fb79b6d441"
            alt="Arrow icon"
            className={styles.arrowIcon}
          />
        </div>
      </div>
    </button>
  );
}

export default CloserLookButton;
