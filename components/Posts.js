import React from "react";
import Post from "./Post";
import cla2022 from "../assets/cla2022.jpg";
import hasbula from "../assets/hasbula.webp";
import harambe from "../assets/harambe.jpg";
const Posts = () => {
  return (
    <div>
      <Post image={cla2022} />
      <Post image={harambe} />
      <Post image={hasbula} />
      <Post image={cla2022} />
      <Post image={harambe} />
      <Post image={hasbula} />
    </div>
  );
};

export default Posts;
