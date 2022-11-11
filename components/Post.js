import Image from "next/image";
import React from "react";
import logo from "../assets/reddit.png";
import { TbArrowBigTop } from "react-icons/tb";
import { TbArrowBigDown } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import { IoIosShareAlt } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";

const Post = ({ image }) => {
  return (
    <div className="bg-white mt-5   rounded-[0.5rem]">
      {/* Vote */}
      <div className=" flex h-full">
        <div className="bg-neutral-200 justify-center items-center px-2 rounded-l-[0.5rem]">
          <TbArrowBigTop className="w-full  h-6 " />
          <div className="py-2 ">
            <p>75.9k </p>
          </div>
          <TbArrowBigDown className="w-full   h-6 " />
        </div>
        <div className="">
          {" "}
          {/* Header */}
          <div className="   p-2">
            <div className="flex items-center whitespace-nowrap text-[14px] justify-between ">
              <div className="flex items-center  ">
                <div className="w-8 h-8 ">
                  <Image src={logo} />
                </div>
                <p className="font-bold pl-2">r/news</p>
                <p className="pl-2 text-gray-400 text-[12px]">
                  Posted by u/JayR_97 11 hours ago{"  "}
                  <span className="text-[14px]  animate-pulse  ">🔥 🤩 </span>
                  <span className="text-[14px]  animate-pulse  ">💵 🏆</span>
                  <span>🎁 💎</span>& 13 More
                </p>
              </div>
              <div className=" ">
                <button className="text-white bg-blue-500 px-3 ml-4 py-1 rounded-full">
                  Join
                </button>
              </div>
            </div>
            <div className="pt-1">
              <p className="font-semibold">
                Elon Musk scraps Twitter’s work from home policy
              </p>
            </div>
          </div>
          {/* Body */}
          <div className="px-10 pt-4">
            <Image src={image} />
          </div>
          {/* Buttons */}
          <div className="flex">
            <div className="flex items-center font-semibold text-gray-500 space-x-2 pl-6 py-2">
              <TfiComment />
              <p>10.7k Comments</p>
            </div>
            <div className="flex items-center font-semibold text-gray-500 space-x-2 pl-6 py-2">
              <IoIosShareAlt className="text-[20px]" />
              <p>10.7k Comments</p>
            </div>
            <div className="flex items-center font-semibold text-gray-500 space-x-2 pl-6 py-2">
              <BsBookmark className="text-[18px]" />
              <p>10.7k Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
