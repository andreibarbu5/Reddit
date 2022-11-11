import React from "react";
import { ImFire } from "react-icons/im";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import PopularButton from "./PopularButton";
import { MdOutlineTableRows } from "react-icons/md";
const Popular = () => {
  const buttons = [
    {
      text: "Hot",
      image: <ImFire className="shrink-0" />,
    },
    { text: "Romania", css: "hidden sm:inline-flex" },
    { text: "All" },
  ];
  return (
    <div className=" w-full rounded-[0.5rem] ">
      <div className="sm:w-[85vw] md:w-full mx-auto  h-[4rem] sm:h-full">
        <p className=" xs:px-4 p-1 px-2">Popular posts</p>

        <div className="flex justify-between items-center  bg-white py-1 sm:py-4  px-2  xs:px-[1rem] sm:rounded-[0.5rem]">
          <div className="flex space-x-4">
            <div className="flex justify-between   space-x-3">
              {buttons.map((button) => (
                <PopularButton
                  text={button.text}
                  image={button.image}
                  css={button.css}
                  key={button.text}
                />
              ))}
            </div>
            <div className="hidden md:inline-flex space-x-4">
              <div className="flex items-center space-x-2 font-bold text-gray-500">
                <IoDiamondOutline className="text-[18px]" />
                <p>New</p>
              </div>
              <div className="flex items-center space-x-2 font-bold text-gray-500">
                <MdOutlineLeaderboard className="text-[18px]" />
                <p>Top</p>
              </div>
              <div className="flex items-center space-x-2 font-bold text-gray-500">
                <BsThreeDots className="text-[18px]" />
              </div>
            </div>
          </div>

          <div className="cursor-pointer  ">
            <MdOutlineTableRows className="  w-[2rem] h-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
