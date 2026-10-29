import React from "react";
import cartIcon from "../images/cart-icon.png";

function Card({ ind },key) {
  return (
    <div
      key={key}
      className="bg-[#fefefe] relative pl-2 border items-start justify-evenly  flex flex-col  rounded-xl h-[19rem] w-[15rem]"
    >
      <img
        className="h-[10rem] rounded-lg w-[96%]  border"
        src={ind.imageUrl}
        alt="image"
      />
      <div className="text-left">
        <p className="font-medium text-lg">{ind.name}</p>
        <p className="text-[rgba(0,0,0,0.4)] text-sm">{ind.detail}</p>
        <p className="text-2xl ">
          <span className="font-medium text-[#285b4a]"> {ind.price}</span>
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
