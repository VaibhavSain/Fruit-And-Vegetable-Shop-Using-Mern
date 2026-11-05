import React, { useState } from "react";
import cartIcon from "../images/cart-icon.png";

function Filter({ setProduct, product }) {
  const [sort, setSort] = useState("low");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("All");

  const handleFilter = () => {
    let filteredProducts = [...product];

    // Filter by minimum price
    if (minPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (item) => Number(item.price) >= Number(minPrice),
      );
    }

    // Filter by maximum price
    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (item) => Number(item.price) <= Number(maxPrice),
      );
    }

    // Filter by category/type
    if (category !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.category?.toLowerCase() === category.toLowerCase() ||
          item.type?.toLowerCase() === category.toLowerCase(),
      );
    }

    // Sort by price
    if (sort === "low") {
      filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
    } else {
      filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
    }

    setProduct(filteredProducts);
  };

  return (
    <div className="bg-[#f3fafb] border flex flex-row items-center justify-evenly rounded-xl mt-[1rem] h-[10rem] w-[96%]">
      <label>
        <p>Sort by</p>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-[2.50rem] bg-white border mt-1 rounded-lg pl-4 pr-4 w-[14rem]"
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </label>

      <label>
        <p>Min Price</p>
        <input
          type="number"
          min="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min"
          className="h-[2.50rem] border mt-1 pl-2 rounded-lg"
        />
      </label>

      <label>
        <p>Max Price</p>
        <input
          type="number"
          min="0"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max"
          className="h-[2.50rem] border mt-1 pl-2 rounded-lg"
        />
      </label>

      <button
        onClick={handleFilter}
        className="pl-6 border rounded-xl pr-6 pt-3 pb-3 bg-[#f3f6f7]"
      >
        Filter by Price Range
      </button>

      <label>
        <p>Filter by Type</p>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-[2.50rem] bg-white border mt-1 rounded-lg pl-4 w-[14rem]"
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </label>

      <button className="bg-[#0d824b] border rounded-2xl pl-6 gap-2 pr-6 pt-4 pb-4 items-center justify-center flex flex-row text-white">
        <img src={cartIcon} className="h-[1.50rem]" alt="cart" />
        <p className="font-medium text-xl">Buy Now</p>
      </button>
    </div>
  );
}

export default Filter;
