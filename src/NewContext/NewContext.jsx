import React, { createContext } from "react";
import all_products from "../Components/assets/All_product";

export const NewContex = createContext(null);

const MyBusinessContext = (props) => {
  const contexValue = { all_products };

  return (
    <NewContex.Provider value={contexValue}>
      {props.children}
    </NewContex.Provider>
  );
};

export default MyBusinessContext;
