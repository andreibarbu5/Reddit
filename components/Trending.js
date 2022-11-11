import React from "react";
import elon from "../assets/elon.webp";
import tesla from "../assets/tesla.jpg";

import cla2022 from "../assets/cla2022.jpg";
import harambe from "../assets/harambe.jpg";
import Card from "./Card";
const Trending = () => {
  return (
    <div>
      <div className="w-full px-4">
        <div className="w-fit mx-auto   ">
          <div className="">
            <p className="text-black/80 text-[15px] font-semibold pb-2 pt-3">
              Trending Today
            </p>
          </div>

          <div className="flex space-x-4 pt-1  ">
            <div className="">
              <Card
                photo={elon}
                title="Glon Musk"
                description="Just bought Twitter, for $40 billion dollors"
                category="r/business and more"
              />
            </div>

            <div className="hidden sm:inline-flex">
              <Card
                photo={cla2022}
                title="Elon Gusk"
                description="Just bought Twitter, for $40 billion dollors  "
                category="r/business and more"
              />
            </div>
            <div className="hidden md:inline-flex">
              <Card
                photo={harambe}
                title="Harambe"
                description="Just bought Twitter, for $40 billion dollors"
                category="r/business and more"
                className="hidden md:inline-flex"
              />
            </div>
            <div className="hidden lg:inline-flex">
              <Card
                photo={tesla}
                title="Elon Musk"
                description="Just bought Twitter, for $40 billion dollors"
                category="r/business and more"
                className="hidden lg:inline-flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
