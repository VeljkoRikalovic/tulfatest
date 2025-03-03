import styles from "./SizeVar.module.css";

function SizeVar() {
  return (
    <section className={styles.container}>
      <article className={styles.contentWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9326ccd5cc9ff89be7f2bb60c23e484a97f24343f360f1ee5ae7304f3c36cff9?placeholderIfAbsent=true&apiKey=038103d4a2ef4ba29434eeb22508eb30"
          alt="Background image"
          className={styles.backgroundImage}
          loading="lazy"
        />
        <p className={styles.textContent}>Lorem Ipsum Dolor Sit Amet</p>
      </article>
    </section>
  );
}

export default SizeVar;
