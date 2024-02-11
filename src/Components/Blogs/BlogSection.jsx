import React from "react";
import img from "./Images/landingpgimg.png";
import "./BlogSection.css";
import data from "./BlogsData.json";
import { Link } from "react-router-dom";

const allBlog = () => {
  return data.data.map((blog, index) => (
    <div className="oneblog">
      <img src={blog.thumbnailimg} alt="" />
      <h2>{blog.title}</h2>
      <p>{blog.shortsummary}</p>
      <div>
        <p>{blog.date}</p>
        <Link to={`/blog/${blog.searchkey}`}>Read More</Link>
      </div>
    </div>
  ));
};

function BlogSection() {
  return (
    <div id="BlogSection">
      <div id="blog-landingpage">
        <h2>Simplify, Explore, and Connect with Blockchain Blog Wisdom</h2>
        <img src={img} alt="" />
      </div>
      <div id="blog-allblogs">{allBlog()}</div>
    </div>
  );
}

export default BlogSection;
