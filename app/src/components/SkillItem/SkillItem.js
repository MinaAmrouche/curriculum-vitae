import React from "react";
import "./SkillItem.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

const SkillItem = ({ icon, iconPaths, percentage }) => {
  let paths = [];
  for (let i = 1; i <= iconPaths; i++) {
    paths.push(`path${i}`);
  }
  return (
    <div className="SkillItem">
      <i className={[icon, "SkillItem__picto"].join(" ")}>
        {paths.map((path, index) => {
          return <span className={path} key={index}></span>;
        })}
      </i>
      <div className="SkillItem__progress-bar">
        <ProgressBar percentage={percentage}></ProgressBar>
      </div>
    </div>
  );
};

export default SkillItem;
