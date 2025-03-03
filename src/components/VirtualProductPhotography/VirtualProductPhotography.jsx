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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/024a1e1529c9d6d4cfa469646e4097ed5ab5cdca?placeholderIfAbsent=true"
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
