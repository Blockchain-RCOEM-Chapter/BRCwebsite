import React from "react";
import img from "./Images/landingpgimg.png";
import "./BlogSection.css";
import data from "./BlogsData.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Function to format the date to a comparable format (e.g., yyyy-mm-dd)
const formatDate = (dateStr) => {
  const [day, month, year] = dateStr.split(" ");
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };
  return `${year}-${months[month]}-${day}`;
};

// Sort and map the blog data
const allBlog = () => {
  return data.data
    .sort((a, b) => new Date(formatDate(b.date)) - new Date(formatDate(a.date)))
    .map((blog, index) => {
      const shortSummary =
        blog.shortsummary.length > 147
          ? blog.shortsummary.slice(0, 147) + "..."
          : blog.shortsummary;

      return (
        <div className="oneblog" key={index}>
          <img src={blog.thumbnailimg} alt="" />
          <h2>{blog.title}</h2>
          <p>{shortSummary}</p>
          <div>
            <p>{blog.date}</p>
            <Link to={`/blog/${blog.searchkey}`}>Read More</Link>
          </div>
        </div>
      );
    });
};

function BlogSection() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
          rel="canonical"
          href="https://blockchainrcoemchapter.co.in/blogs"
        />
      </Helmet>
      <div id="BlogSection">
        <div id="blog-landingpage">
          <h2>Simplify, Explore, and Connect with Blockchain Blog Wisdom</h2>
          <img src={img} alt="" />
          <i className="fa-solid fa-angles-down"></i>
        </div>
        <h1 className="our-home-heading">OUR RECENT BLOGS</h1>
        <div id="blog-allblogs">{allBlog()}</div>
      </div>
    </>
  );
}

export default BlogSection;
