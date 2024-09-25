import React from "react";
import carsData from "../../data/carsDate";

function Suv() {
  const suvCars = carsData.filter((car) => car.category == "suv");
  return <suvCars data={suvCars} />;
}

export default Suv;
