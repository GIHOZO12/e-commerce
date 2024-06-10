import React, { useContext } from "react";
import NewContex from "../NewContext/NewContext";
import drop_down from "../Components/assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

function ShopCategory(props) {
  const { all_products } = useContext(NewContex);
  return (
    <div className="shop-category">
      <div className="shopCategory-indexSort">
        <p>
          <span> Showing 1-4</span> out 22 products
        </p>
        <div className="shopcateogy-sort">
          sort by <img src={drop_down} alt="" />
        </div>
        <div className="shopcategory-products">
          {all_products.map((item, i) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
