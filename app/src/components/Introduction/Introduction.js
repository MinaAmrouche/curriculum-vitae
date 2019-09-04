import React from "react";
import "./Introduction.scss";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import Separator from "../Separator/Separator";
import ContactItem from "../ContactItem/ContactItem";

const Introduction = () => {
  return (
    <div className="Introduction">
      <Separator />
      <div className="Introduction__name">
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
      <Separator />
      <h2>Profile</h2>
      <Separator />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <Separator />
      <h2>Technical skills</h2>
      <Separator />
    </div>
  );
};

export default Introduction;
