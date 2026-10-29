import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      setProducts(response.data);
      console.log("data is loaded");
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="min-h-[20rem] pb-6 pl-6 grid grid-cols-5 gap-4  max-h-max  mt-4 bg-[#fbfdfe] w-full">
      {products.map((ind, key) => (
        <Card ind={ind} key={key} />
      ))}
    </div>
  );
}

export default Products;
