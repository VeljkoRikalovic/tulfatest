import { useState } from "react";
import styles from "./ProductSilos.module.css";

function Caroseul() {
  const [size, setSize] = useState(200);

  return (
    <div className="caroseul">
      <img
        src="\static\images\6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg"
        className={styles.caroseulImage}
        style={{
          width: "100%",
          height: `${size}px`,
        }}
      />
      <div className={styles.caroseulButtons}>
        <button className={styles.caroseulButton} onClick={() => setSize(200)}>
          1
        </button>
        <button className={styles.caroseulButton} onClick={() => setSize(250)}>
          2
        </button>
        <button className={styles.caroseulButton} onClick={() => setSize(300)}>
          3
        </button>
        <button className={styles.caroseulButton} onClick={() => setSize(350)}>
          4
        </button>
      </div>
    </div>
  );
}

export default Caroseul;
