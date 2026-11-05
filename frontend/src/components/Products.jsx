import React from "react";
import Card from "./Card";

function Products({ product }) {
  return (
    <div className="min-h-[20rem] pb-6 pl-6 grid grid-cols-5 gap-4  max-h-max  mt-4 bg-[#fbfdfe] w-full">
      {product.map((ind, key) => (
        <Card ind={ind} key={key} />
      ))}
    </div>
  );
}

export default Products;
