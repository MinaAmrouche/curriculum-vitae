import React from "react";
import "./Introduction.scss";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import PictoPhone from "../../assets/images/picto__phone.svg";
import PictoMail from "../../assets/images/picto__mail.svg";
import Separator from "../Separator/Separator";

const Introduction = () => {
  return (
    <div className="Introduction">
      <Separator />
      <div className="Introduction__column">
        <img src={ProfilePicture} alt="" className="introduction__picture" />
        <h1>MINA AMROUCHE</h1>
        <h3>Front-end web developer</h3>
      </div>
      <Separator />
      <img src={PictoMail} alt="" />
      <img src={PictoPhone} alt="" />
    </div>
  );
};

export default Introduction;
