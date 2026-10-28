import React from "react";
import fruitImage from "../images/hero-produce-image.png";
import vectorImage from "../images/Vector.png";
function Hero() {
  return (
    <div className="bg-[#edf5e6] border relative pl-10 pr-10 flex flex-row items-center rounded-xl justify-between mt-[1.50rem] h-[10rem] w-[96%]">
      <div className="flex flex-col gap-2 text-left">
        <p className="text-lg text-[#19873f] font-medium">FRESH & HEALTHY</p>
        <h2 className="text-4xl font-medium text-[#0b372c]">
          Fruit & Vegetable Market
        </h2>
        <p className="text-[rgba(0,0,0,0.6)] text-lg">
          Fresh produce. Better health. Brighter days.
        </p>
      </div>
      <img
        src={fruitImage}
        className="h-[10.50rem] relative right-[-8rem] top-[-0.18rem] "
        alt="fruitImage"
      />
      <div>
        <p className="text-lg text-[#184230] transform -rotate-12 font-medium">
          Fresh <br /> From Farm <br /> to Your Table
        </p>
        <img
          src={vectorImage}
          className="relative bottom-[-.50rem]"
          alt="vector"
        />
      </div>
    </div>
  );
}

export default Hero;
