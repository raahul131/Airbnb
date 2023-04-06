import React from "react";
import logo from "../src/assets/long-logo.png";
import { BiSearch } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsList } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between pt-2 pl-6 items-center sticky">
      <img src={logo} alt="logo" className="h-8" />
      <div className="flex flex-initial items-center gap-2 pt-1 pb-1 pr-4 pl-4 border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:cursor-pointer">
        <p className="font-medium border-r-2 pr-2">Any where</p>
        <p className="font-medium border-r-2 pr-2">Any week</p>
        <p className="font-medium text-gray-400">Add guests</p>
        <div className="flex items-center bg-[#ff583c] rounded-full p-1 text-white">
          <BiSearch />
        </div>
      </div>

      <div className="flex flex-initial items-center gap-2 p-2 rounded-full">
        <div className="hover:bg-gray-100 hover:rounded-full cursor-pointer items-center p-2 font-semibold">
          Airbnb your home
        </div>
        <div className="hover:bg-gray-100 rounded-full p-2 items-center text-xl">
          <VscGlobe />
        </div>
        <div className="border gap-3 border-gray-200 rounded-full p-2 flex text-xl cursor-pointer hover:shadow-md">
          <BsList className="" />
          <RiAccountCircleFill className="text-gray-600 items-center" />
        </div>
      </div>
    </div>
  );
};

export default Header;
