import { useRouter } from "next/router";
import React from "react";
import carsDate from "../../data/carsDate";
import CarsList from "../../components/template/CarsList";
function FilerdCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterdData = carsDate.filter(
    (car) => car.price > min && car.price < max
  );

  if (!filterdData.length) return <h3>NOT FOUND!!</h3>;
  return <CarsList data={filterdData} />;
}

export default FilerdCars;
