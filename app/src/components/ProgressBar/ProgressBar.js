import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="ProgressBar">
      <div className="ProgressBar__filler" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
