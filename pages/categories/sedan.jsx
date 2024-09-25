import React from "react";
import carsData from "../../data/carsDate";
import CarsList from "../../components/template/CarsList";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category == "sedan");

  return <CarsList data={sedanCars} />;
}

export default Sedan;
