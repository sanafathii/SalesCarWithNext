import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("please enter ma or min");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          name="min"
          value={min}
          className={styles.input}
          placeholder="Inter min price"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="text"
          name="max"
          value={max}
          className={styles.input}
          placeholder="inter max price"
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler} className={styles.button}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
