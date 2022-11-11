import Image from "next/image";
import React from "react";
import read from "../assets/read.png";
import { MdKeyboardArrowUp } from "react-icons/md";
const TopButton = ({ subreddit, rank, image }) => {
  return (
    <div className="flex items-center space-x-2   ">
      <p className="">{rank}</p>
      <MdKeyboardArrowUp className="text-lime-500 h-10 w-6 -pr-4   " />
      <div className="w-10 h-10 -pl-20 flex    ">
        <Image src={image} className="rounded-full object-cover" />
      </div>

      <p className="  ">{subreddit}</p>
    </div>
  );
};

export default TopButton;
