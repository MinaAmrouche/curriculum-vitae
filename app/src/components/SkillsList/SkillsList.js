import React from "react";
import "./SkillsList.scss";

const SkillsList = ({ icons }) => {
  return (
    <div className="SkillsList">
      <i className="icon-plus-square SkillsList__plus"></i>
      {icons.map((icon, index) => {
        let paths = [];
        for (let i = 1; i <= icon.paths; i++) {
          paths.push(`path${i}`);
        }

        return (
          <i className={[icon.name, "SkillsList__picto"].join(" ")} key={index}>
            {paths.map((path, index) => {
              return <span className={path} key={index}></span>;
            })}
          </i>
        );
      })}
    </div>
  );
};

export default SkillsList;
