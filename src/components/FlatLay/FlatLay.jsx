import styles from "./FlatLay.module.css";

// Hero section component with gradient title
const HeroSection = () => {
  return (
    <header className={styles.heroSection}>
      <div className={styles.titleContainer}>
        <h1 className={styles.gradientTitle}>Lorem Ipsum</h1>
      </div>
    </header>
  );
};

// Middle section component (currently empty)
const MiddleSection = () => {
  return <main className={styles.middleSection}></main>;
};

// Bottom section component with text
const BottomSection = () => {
  return (
    <section className={styles.bottomSection}>
      <p>
        Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac. Leo
        eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla
        eget.
      </p>
    </section>
  );
};

function FlatLay() {
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
      <div className={styles.mainContainer}>
        <HeroSection />
        <MiddleSection />
        <BottomSection />
      </div>
    </>
  );
}

export default FlatLay;
