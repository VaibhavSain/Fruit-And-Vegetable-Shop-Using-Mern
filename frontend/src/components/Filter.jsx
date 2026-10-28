import React from "react";

function Filter() {
  return (
    <div className="bg-red-300 flex flex-row items-center justify-evenly rounded-xl mt-[1rem] h-[10rem] w-[96%]">
      <label>
        <p className="text-left">Sort By</p>
        <select>
          <option>Price:Low to High</option>
          <option>india</option>
        </select>
      </label>
      <label>
        <p className="text-left">Min Price</p>
        <input name="min" />
      </label>
      <label>
        <p className="text-left">Max Price</p>
        <input name="max" />
      </label>
      <button>Filter by Price Range</button>
      <label>
        <p>Filter by Type</p>
        <select>
          <option>All</option>
        </select>
      </label>
      <button>Buy Now</button>
    </div>
  );
}

export default Filter;
