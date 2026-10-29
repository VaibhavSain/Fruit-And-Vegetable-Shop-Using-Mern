import React from "react";
import cartIcon from "../images/cart-icon.png";

function Card() {
  return (
    <div className="bg-[#fefefe] border items-center justify-evenly  flex flex-col  rounded-xl h-[19rem] w-[15rem]">
      <img
        className="h-[10rem] w-[90%]  border border-red-700"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl92YVHSnI2rZ0HyfKTpGA6A_0tv615EpbxqWWbfQaZw&s=10"
        alt="image"
      />
      <div className="text-left relative left-[-3rem]">
        <p className="font-medium text-lg">Apple</p>
        <p className="text-[rgba(0,0,0,0.4)] text-sm">Fresh and Crispy</p>
        <p className="text-2xl ">
          <span className="font-medium text-[#285b4a]"> 150</span>
          <span className="text-[rgba(0,0,0,0.5)] text-sm">/kg</span>
        </p>
      </div>
      <button className="flex bg-[#0b814a] text-white gap-2 font-medium justify-center rounded-lg items-center h-[2rem] w-[90%] flex-row">
        <img src={cartIcon} className="h-[1.50rem]" alt="cart-icon" />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}

export default Card;
