import { useState } from "react";
import styles from "./ProductSilos.module.css";

function Caroseul() {
  const [size, setSize] = useState(200);

  return (
    <div className="caroseul">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7770f3a68021466e263923cbed9ac5ffa5239f0e"
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
