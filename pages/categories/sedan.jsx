import React from "react";
import carsData from "../../data/carsDate";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category == "sedan");
  console.log(sedanCars);
  return (
    <div>
      <h1>sedan</h1>
      {sedanCars.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}

export default Sedan;
