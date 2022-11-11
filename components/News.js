import React from "react";
import TopButton from "../components/TopButton.js";

import dog from "../assets/dog.webp";
import ball from "../assets/ball.jpg";
import coffe from "../assets/coffe.webp";
import beast from "../assets/beast.jpg";
import Image from "next/image";

import { RiSecurePaymentFill } from "react-icons/ri";
import CategoryButton from "./CategoryButton.js";
const News = () => {
  const buttons = [
    { rank: 1, subreddit: "r/worldnews", image: dog },
    { rank: 2, subreddit: "r/nottheonion", image: ball },
    { rank: 3, subreddit: "r/technews", image: coffe },
    { rank: 4, subreddit: "r/savedyouaclick", image: beast },
  ];

  const category = ["Top", "Near You", "Sports", "News"];
  return (
    <div className="hidden lg:block ml-4">
      <div className=" lg:flex flex-col w-[20rem]  max-w-[35rem] bg-white mt-8  rounded-[0.4rem]  h-[26rem]  ">
        <div className=" bg-[url('../assets/banner.jpg')]   h-[5.5rem] w-full ">
          <div className="bg-black/30 h-full  rounded-t-[0.4rem] flex items-end p-2 pl-4 ">
            <p className="text-white font-bold  text-[17px]   ">
              Top News Communities
            </p>
          </div>
        </div>
        <div className="p-4 space-y-4 ">
          {buttons.map((button) => (
            <TopButton
              rank={button.rank}
              subreddit={button.subreddit}
              image={button.image}
            />
          ))}
        </div>
        <div className="bg-blue-500 rounded-[1rem] mx-5 text-center text-white font-bold py-1 mb-2">
          <button>View All</button>
        </div>

        <div className="flex space-x-2 pl-4  my-2">
          {category.map((categ) => (
            <CategoryButton text={categ} />
          ))}
        </div>
      </div>
      <div className="mt-4 bg-white p-5 flex flex-col rounded-[0.5rem]">
        <div className="flex items-center space-x-2">
          <RiSecurePaymentFill className="w-[3rem] h-[3rem] text-[#ff4500] " />
          <div className="text-[13px]">
            <p className="font-semibold">Reddit Premium</p>
            <p>The best experience, with monthly Coins</p>
          </div>
        </div>

        <button className="bg-[#ff4500] text-white font-bold w-full   h-8 rounded-full mt-2">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default News;
