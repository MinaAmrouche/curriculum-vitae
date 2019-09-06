import React from "react";
import "./SkillsList.scss";
import { PictoDisplayer } from "components/atoms";

const SkillsList = ({ icons }) => {
  return (
    <div className="SkillsList">
      <i className="icon-plus-circle SkillsList__plus"></i>
      <div className="SkillsList__list">
        {icons.map((icon, index) => {
          return (
            <PictoDisplayer picto={icon.name} numberOfPaths={icon.paths} className="SkillsList__picto" key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;
