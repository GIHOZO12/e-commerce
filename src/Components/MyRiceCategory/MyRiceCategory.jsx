import React from "react";
import "./MyRiceCategory.css";
import Arrow_iocn from "../assets/breadcrum_arrow.png";

function MyRiceCategory(props) {
  const { Product } = props;
  return (
    <div className="myrice-category">
      Home <img src={Arrow_iocn} alt="" />
      Rice <img src={Arrow_iocn} alt="" /> {Product.category}
      <img src={Arrow_iocn} alt="" /> {Product.name}
    </div>
  );
}

export default MyRiceCategory;
