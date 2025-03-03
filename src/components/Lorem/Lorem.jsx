import styles from "./Lorem.module.css";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.container}>
        <article className={styles.textContent}>
          <h1 className={styles.whiteText}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.grayText}>
            Quo odit atque ut architecto obcaecati rem vitae tempore non
            asperiores consequatur ut error facilis est architecto doloribus eos
            laborum praesentium!
          </p>
        </article>
      </section>
    </>
  );
}

export default InputDesign;
