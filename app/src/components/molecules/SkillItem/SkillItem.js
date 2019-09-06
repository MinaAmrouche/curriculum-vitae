import React from "react";
import "./SkillItem.scss";
import { ProgressBar, PictoDisplayer } from "components/atoms";

const SkillItem = ({ icon, iconPaths, percentage }) => {
  return (
    <div className="SkillItem">
      <PictoDisplayer picto={icon} numberOfPaths={iconPaths} className="SkillItem__picto" />
      <div className="SkillItem__progress-bar">
        <ProgressBar percentage={percentage}></ProgressBar>
      </div>
    </div>
  );
};

export default SkillItem;
