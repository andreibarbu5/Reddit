import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const PopularButton = ({ text, image, css }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center space-x-1 bg-neutral-100  sm:p-1 px-3 w-[6rem] rounded-full text-blue-600 cursor-pointer ${css}`}
      >
        {image}

        <p className="font-semibold">{text}</p>

        <MdKeyboardArrowDown className="shrink-0" />
      </div>
    </div>
  );
};

export default PopularButton;
