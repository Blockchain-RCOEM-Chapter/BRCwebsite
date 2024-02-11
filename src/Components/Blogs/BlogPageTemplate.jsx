import React from "react";
import jsondata from "./BlogsData.json";
import { useParams } from "react-router-dom";
import bg from "./Images/brc-bordered-logo.png";
import "./BlogPageTemplate.css";

function BlogPageTemplate() {
  const { key } = useParams();
  const filteredData = jsondata.data.find((item) => item.searchkey === key);

  if (!filteredData) {
    return "NO BLOG FOUND";
  }
  return (
    <div id="BlogTemplate">
      <h1>{filteredData.title}</h1>
      <div id="blog-introduction">
        <img src={bg} />
        <span>
          <p>Content Team - Blockchain Rcoem Chapter</p>
          <p>{`Published on ${filteredData.date} · ${filteredData.readtime} read`}</p>
        </span>
      </div>
      {filteredData.material.map((item, index) => {
        if (item.tag === "img") {
          return <img key={index} src={item.src} alt={`Image ${index}`} />;
        } else if (item.tag === "h2") {
          return <h2 key={index}>{item.content}</h2>;
        } else if (item.tag === "p") {
          return <p key={index}>{item.content}</p>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default BlogPageTemplate;
