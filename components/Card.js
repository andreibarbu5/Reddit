import React from "react";
import Image from "next/image";
import subreddit from "../assets/subreddit.webp";
import { MdCardMembership } from "react-icons/md";

const Card = ({ photo, title, description, category }) => {
  return (
    <div className="w-[80vw] h-[11rem] sm:w-[14rem]  sm:h-[11.5rem] md:h-[12rem]    rounded-[0.5rem] relative bg-red-400 z-30 ">
      {/* Background Image */}
      <div className="absolute flex h-full  brightness-[80%]  ">
        <Image src={photo} className=" rounded-[0.5rem] object-cover" />
      </div>

      <div className="grad relative flex justify-end h-full flex-col p-2 z-30  ">
        <p className="text-white text-[19px]   font-medium -mb-1">{title}</p>
        <p className="text-white text-[14.5px]  font-medium">{description}</p>

        <div className="flex items-center mt-1.5">
          <div className="w-[1.1rem] h-[1.1rem]   mr-2">
            <Image src={subreddit} />
          </div>
          <p className="text-white text-[13px]">r/technoking and more</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
