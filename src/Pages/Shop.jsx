import { React, useContext } from "react";
import NewContex from "../NewContext/NewContext";
import { useParams } from "react-router-dom";
import MyRiceCategory from "../Components/MyRiceCategory/MyRiceCategory";

function Shop() {
  const { all_products } = useContext(NewContex);
  const { ProductId } = useParams();
  const product = all_products.find((e) => e.id === Number(ProductId));

  return (
    <div>
      <MyRiceCategory product={product} />
    </div>
  );
}

export default Shop;
