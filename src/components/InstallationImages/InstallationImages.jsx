import styles from "./InstallationImages.module.css";

function InstallationImages() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <header className={styles.heroSection}>
          <h1 className={styles.logo}>Lorem Ipsum</h1>
        </header>
        <ImageSection />
        <TextSection />
      </main>
    </>
  );
}

function ImageSection() {
  return (
    <section className={styles.imageSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34f79181faca615a099a3ad6dcb7be4dcae2ce4b"
        alt="Moving furniture"
        loading="lazy"
        className={styles.mainImage}
      />
      <div className={styles.actionButtons}>
        <ActionButton
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/15893c38e377092d5a76e2c06607a683f97eae54"
          altText="Up arrow"
        />
        <ActionButton
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4583c548ed245152473d03cf093122857b36af11"
          altText="Down arrow"
        />
      </div>
    </section>
  );
}

function ActionButton({ imageUrl, altText }) {
  return (
    <button className={styles.actionButton}>
      <img src={imageUrl} alt={altText} className={styles.buttonIcon} />
    </button>
  );
}

function TextSection() {
  return (
    <section className={styles.textSection}>
      <p>
        Give your customers a clear view of how your furniture fits into their
        space with precise dimensions and scale indicators.
      </p>
    </section>
  );
}

export default InstallationImages;
