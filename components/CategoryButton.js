import React from "react";

const CategoryButton = ({ text }) => {
  return (
    <div>
      <div className="">
        <div className="bg-neutral-100 w-[4.2rem] text-center rounded-full">
          <p className="text-blue-400 font-bold text-[13px] p-[0.2rem] whitespace-nowrap ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryButton;
