import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
