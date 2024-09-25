import React from "react";
import carsData from "../../data/carsDate";
import CarsList from "../../components/template/CarsList";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category == "hatchback");
  return <CarsList data={hatchbackCars} />;
}

export default Hatchback;
