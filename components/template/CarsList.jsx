import React from "react";
import styles from "./CarsList.module.css";
import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarsList({ data }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={() => router.back()}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
