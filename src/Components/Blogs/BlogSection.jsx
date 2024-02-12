import React from "react";
import img from "./Images/landingpgimg.png";
import "./BlogSection.css";
import data from "./BlogsData.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>BLOGS | BLOCKCHAIN RCOEM CHAPTER</title>
        <meta
          name="description"
          content="Visit the official website of Blockchain RCOEM Chapter (BRC), your gateway to decentralized development and blockchain programming at RCOEM"
        />
        <meta property="og:title" content="BLOG | BLOCKCHAIN RCOEM CHAPTER" />
        <meta property="og:site_name" content="BLOCKCHAIN RCOEM CHAPTER" />
        <meta
          property="og:description"
          content="Visit the official website of Blockchain RCOEM Chapter (BRC), your gateway to decentralized development and blockchain programming at RCOEM"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://blockchainrcoemchapter.co.in/blogs"
        />
        <link
          rel="cononical"
          href="https://blockchainrcoemchapter.co.in/blogs"
        />
      </Helmet>
      <div id="BlogSection">
        <div id="blog-landingpage">
          <h2>Simplify, Explore, and Connect with Blockchain Blog Wisdom</h2>
          <img src={img} alt="" />
        </div>
        <div id="blog-allblogs">{allBlog()}</div>
      </div>
    </>
  );
}

export default BlogSection;
