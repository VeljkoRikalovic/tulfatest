import styles from "./DimensionImage.module.css";

function DimensionImage() {
  const handleScrollUp = () => {
    // Implement scroll up functionality
    window.scrollBy({ top: -300, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    // Implement scroll down functionality
    window.scrollBy({ top: 300, behavior: "smooth" });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <header className={styles.heroSection}>
          <h1 className={styles.logo}>Lorem Ipsum</h1>
        </header>
        <section className={styles.furnitureSection}>
          <figure className={styles.imageContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4143a6dc72fd2f9c0768a4d2399e7c487af6d33"
              alt="Modern kitchen interior"
              loading="lazy"
              className={styles.mainImage}
            />
            <div className={styles.controlButtons}>
              <button
                className={styles.controlButton}
                onClick={handleScrollUp}
                aria-label="Scroll up"
              >
                <i className="ti ti-arrow-up" aria-hidden="true"></i>
              </button>
              <button
                className={styles.controlButton}
                onClick={handleScrollDown}
                aria-label="Scroll down"
              >
                <i className="ti ti-arrow-down" aria-hidden="true"></i>
              </button>
            </div>
          </figure>
        </section>
        <section className={styles.descriptionSection}>
          <p>
            Give your customers a clear view of how your furniture fits into
            their space with precise dimensions and scale indicators.
          </p>
        </section>
      </main>
    </>
  );
}

export default DimensionImage;
