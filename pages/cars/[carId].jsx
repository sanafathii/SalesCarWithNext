import { useRouter } from "next/router";
import React from "react";
import carsData from "../../data/carsDate";
import CarDetails from "../../components/template/CarDetails";

function CarDetail() {
  const router = useRouter();
  const carId = router.query.carId;
  const carsDetails = carsData[carId - 1];

  return <CarDetails {...carsDetails} />;
}

export default CarDetail;
