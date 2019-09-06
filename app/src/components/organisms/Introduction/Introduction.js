import React from "react";
import "./Introduction.scss";
import ProfilePicture from "assets/images/profile-picture.jpg";
import { Separator } from "components/atoms";
import { ContactItem, SkillItem, SkillsList, HobbiesList } from "components/molecules";

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
      name: "icon-symfony"
    },
    {
      name: "icon-magento"
    },
    {
      name: "icon-circleci"
    }
  ];
  const hobbies = [
    {
      name: "icon-monitor"
    },
    {
      name: "icon-plane"
    },
    {
      name: "icon-cake"
    },
    {
      name: "icon-headphones"
    },
    {
      name: "icon-book"
    },
    {
      name: "icon-camera"
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
          <ContactItem picto="icon-github" content="github.com/minaamrouche" />
          <ContactItem picto="icon-map-pin" content="Den Haag" />
        </div>
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
      <div className="Introduction__section">
        <Separator />
        <h2>Hobbies</h2>
        <Separator />
        <HobbiesList icons={hobbies} />
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Languages</h2>
        <Separator />
        <br />
        <SkillItem icon="icon-france" iconPaths="4" percentage="100" />
        <SkillItem icon="icon-uk" iconPaths="15" percentage="70" />
      </div>
    </div>
  );
};

export default Introduction;
