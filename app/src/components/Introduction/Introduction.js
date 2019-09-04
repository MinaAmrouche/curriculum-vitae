import React from "react";
import "./Introduction.scss";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import Separator from "../Separator/Separator";
import ContactItem from "../ContactItem/ContactItem";

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
      <div className="Introduction__contact">
        <ContactItem picto="icon-mail" content="mina.amrouche9@gmail.com" />
        <ContactItem picto="icon-phone" content="+33 6 10 73 56 53" />
        <ContactItem picto="icon-github" content="@minaamrouche" />
      </div>
    </div>
  );
};

export default Introduction;
