import React from "react";
import styles from "./card.module.css";
import Locaion from "../icons/Location";
import Link from "next/link";

function Card({ car }) {
  return (
    <Link href={`/cars/${car.id}`}>
      <div className={styles.container}>
        <img src={car.image} className={styles.image} />
        <h4 className={styles.title}>{`${car.name} ${car.model}`}</h4>
        <p className={styles.detail}>{`${car.year} - ${car.distance}km`}</p>
        <div className={styles.footer}>
          <p>${car.price}</p>
          <div className={styles.location}>
            <p>{car.location}</p>
            <Locaion />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
