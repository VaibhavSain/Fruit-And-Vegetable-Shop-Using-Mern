import React from "react";
import logoIcon from "../images/brand-mark.png";
import cartIcon from "../images/cart-icon.png";
import searchIcon from "../images/searchIcon.svg";

function Header() {
  return (
    <div className="h-[3.50rem] flex flex-row items-center justify-evenly  w-full bg-[#0E3E2D]">
      <img src={logoIcon} alt="logo-image" />
      <h2 className="text-white text-xl">Fruit & Vegetable Market</h2>
      <label>
        <div className="bg-white cursor-pointer flex flex-row justify-evenly items-center  h-[2rem] rounded-xl w-[28rem]">
          <img src={searchIcon} alt="searchIcon" className="h-[1.50rem]" />
          <input
            className="w-[24rem] pl-2 text-lg"
            placeholder="Search fruits, vegetables..."
            name="search"
          />
        </div>
      </label>
      <div className="flex flex-row justify-center gap-[2rem] items-center">
        <img src={cartIcon} className="h-[2rem]" alt="cart-image" />
        <p className="text-white">Total Price:0</p>
      </div>
    </div>
  );
}

export default Header;
