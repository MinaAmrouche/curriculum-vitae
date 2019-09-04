import React from "react";
import "./Introduction.scss";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import Separator from "../Separator/Separator";
import ContactItem from "../ContactItem/ContactItem";
import SkillItem from "../SkillItem/SkillItem";
import SkillsList from "../SkillsList/SkillsList";

const Introduction = () => {
  const pictos = [
    {
      name: "icon-vue",
      paths: 3
    },
    {
      name: "icon-docker"
    },
    {
      name: "icon-mongodb"
    },
    {
      name: "icon-mysql"
    },
    {
      name: "icon-nodejs"
    },
    {
      name: "icon-php"
    },
    {
      name: "icon-python"
    },
    {
      name: "icon-sass"
    },
    {
      name: "icon-circleci"
    }
  ];
  return (
    <div className="Introduction">
      <div className="Introduction__section">
        <Separator />
        <div className="Introduction__name">
          <img src={ProfilePicture} alt="" className="Introduction__picture" />
          <h1>MINA AMROUCHE</h1>
          <h3>Front-end web developer</h3>
        </div>
        <Separator />
      </div>
      <div className="Introduction__section">
        <div className="Introduction__contact">
          <ContactItem picto="icon-mail" content="mina.amrouche9@gmail.com" />
          <ContactItem picto="icon-phone" content="+33 6 10 73 56 53" />
          <ContactItem picto="icon-github" content="@minaamrouche" />
        </div>
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Profile</h2>
        <Separator />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Technical skills</h2>
        <Separator />
        <br />
        <SkillItem icon="icon-javascript" percentage="90"></SkillItem>
        <SkillItem icon="icon-css3" percentage="50"></SkillItem>
        <SkillItem icon="icon-html5" percentage="60"></SkillItem>
        <SkillItem icon="icon-react" percentage="70"></SkillItem>
        <SkillItem icon="icon-angular" percentage="50"></SkillItem>
        <SkillItem icon="icon-git" percentage="90"></SkillItem>
        <SkillsList icons={pictos} />
      </div>
    </div>
  );
};

export default Introduction;
