import React from "react";
import BlogCard from "./BlogCard"
import pix from "./img/1.jpg"


function AllBlog() {
  return (
    <>
      <BlogCard img={pix} />
      <BlogCard img={pix} fd="row-reverse" />

    </>
  );
}

export default AllBlog;
