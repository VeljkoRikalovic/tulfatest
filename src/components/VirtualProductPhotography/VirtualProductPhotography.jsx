import styles from "./VirtualProductPhotography.module.css";
import Title from "./Title";

function VirtualProductPhotography() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <Title />
          <section className={styles.productSection}>
            <img
              src="\static\images\modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.jpg"
              alt="Yellow velvet sectional sofa"
              className={styles.productImage}
              loading="lazy"
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default VirtualProductPhotography;
