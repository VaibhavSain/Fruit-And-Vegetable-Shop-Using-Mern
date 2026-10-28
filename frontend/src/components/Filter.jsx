import React from "react";
import cartIcon from "../images/cart-icon.png";

function Filter() {
  return (
    <div className="bg-[#f3fafb] border flex flex-row items-center justify-evenly rounded-xl mt-[1rem] h-[10rem] w-[96%]">
      <label>
        <p className="text-left">Sort by</p>
        <select className="h-[2.50rem] bg-[#ffffff] border mt-1 rounded-lg pl-4 pr-4 w-[14rem]">
          <option>Price: Low to High</option>
          <option>india</option>
        </select>
      </label>
      <label>
        <p className="text-left">Min Price</p>
        <input
          name="min"
          placeholder="Min"
          className="h-[2.50rem] border mt-1 pl-2 rounded-lg"
        />
      </label>
      <label>
        <p className="text-left">Max Price</p>
        <input
          name="max"
          placeholder="Max"
          className="h-[2.50rem] border mt-1 pl-2 rounded-lg"
        />
      </label>
      <button className="pl-6 border rounded-xl pr-6 pt-3 pb-3 bg-[#f3f6f7]">
        Filter by Price Range
      </button>
      <label>
        <p className="text-left">Filter by Type</p>
        <select className="h-[2.50rem] bg-[#ffffff] border mt-1 rounded-lg pl-4 w-[14rem]">
          <option>All</option>
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
