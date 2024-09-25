import React from "react";
import carsData from "../../data/carsDate";
import CarsList from "../../components/template/CarsList";

function Sport() {
  const sportCars = carsData.filter((car) => car.category == "sport");
  return <CarsList data={sportCars} />;
}

export default Sport;
