import Categories from "../../components/module/Categories";
import CarsPage from "../../components/template/CarsPage";
import carsData from "../../data/carsDate";

function Details() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
