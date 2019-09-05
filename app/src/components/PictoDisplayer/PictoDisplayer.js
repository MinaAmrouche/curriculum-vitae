import React from "react";
import "./PictoDisplayer.scss";

const PictoDisplayer = ({ picto, numberOfPaths, className }) => {
  let paths = [];
  for (let i = 1; i <= numberOfPaths; i++) {
    paths.push(`path${i}`);
  }

  return (
    <i className={[picto, className].join(" ")}>
      {paths.map((path, index) => {
        return <span className={path} key={index}></span>;
      })}
    </i>
  );
};

export default PictoDisplayer;
