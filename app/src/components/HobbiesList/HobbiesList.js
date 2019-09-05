import React from "react";
import "./HobbiesList.scss";
import PictoDisplayer from "../PictoDisplayer/PictoDisplayer";

const HobbiesList = ({ icons }) => {
  return (
    <div className="HobbiesList">
      {icons.map((icon, index) => {
        return (
          <PictoDisplayer picto={icon.name} numberOfPaths={icon.paths} className="HobbiesList__picto" key={index} />
        );
      })}
    </div>
  );
};

export default HobbiesList;
