import React from "react";
import logo from "../assets/reddit.png";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 md:px-8 py-2 whitespace-nowrap bg-white">
      {/* Logo */}
      <div className="w-[2.5rem] shrink-0">
        <Image src={logo} />
      </div>
      {/* Search */}
      <div className="relative items-center mx-4    w-[10rem] sm:w-[17rem] md:max-w-[37rem] md:w-full  rounded-full md:mx-8">
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-neutral-100 p-2 rounded-full text-black pl-10 w-[10rem] sm:w-full"
        />
        <FiSearch className="absolute top-[0.7rem] left-[0.5rem] xs:text-[20px]  text-gray-400 " />
      </div>
      {/* Right Menu */}
      <div className="xs:flex">
        <div className="hidden xs:inline-flex space-x-4 pr-4">
          <button className="border border-blue-500 rounded-full p-1 px-3 font-bold text-blue-500 hover:bg-[#f5fafd]">
            Sign Up
          </button>
          <button className="bg-[#0079D3]   hover:bg-[#1484d6] px-3  rounded-full font-bold text-white">
            Log In
          </button>
        </div>
        <div className="cursor-pointer flex items-center hover:border border-gray-500 rounded-[0.4rem] p-1     group">
          <CiUser className="w-[1.5rem] h-[1.5rem] sm:w-[1.2rem] hover:h-[1.2rem] text-gray-500 " />
          <MdKeyboardArrowDown className="group-hover:w-[1rem]  group-hover:h-[1rem] text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
