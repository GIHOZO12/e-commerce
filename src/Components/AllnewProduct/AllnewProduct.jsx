import React from "react";
import "./AllnewProduct.css";
import latest_product from "../assets/Available_product";
import Items from "../Items/Items";
function AllnewProduct() {
  return (
    <div className="allnewProduct">
      <h2 style={{ textAlign: "center" }}> All latest products</h2>
      <hr style={{ width: 100, height: 5, background: "#1212" }} />
      <div className="latest">
        {latest_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllnewProduct;
