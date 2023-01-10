import React from "react";
import {SlArrowDown} from "react-icons/sl";
import falcon9 from "../../../assets/falcon9.png";

const Header = () => {
  return (
    <header className="relative flex justify-center items-center h-screen rounded-md">
      <div className="hidden sm:flex items-center justify-center h-full w-full sm:w-7/12 text-white bg-black">
        <div className="animate-fadeIn">
          <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-source font-bold animate-slideLeft">Motion
            <br/>Is <br/>Immersive
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-5/12 h-screen bg-hero-background bg-cover bg-no-repeat">
        <img src={falcon9} className="h-[80%] w-12 md:w-[50px] animate-bounce1" alt="falcon 9"/>
      </div>
      <SlArrowDown className=" absolute text-white w-8 h-8 animate-bounce opacity-70 bottom-4"/>
    </header>
  );
}

export default Header;