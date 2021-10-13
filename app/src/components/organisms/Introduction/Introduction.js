import React from "react";
import "./Introduction.scss";
import ProfilePicture from "assets/images/profile-picture.jpg";
import { Separator } from "components/atoms";
import { ContactItem, SkillItem, SkillsList } from "components/molecules";

const pictos = [
  {
    name: "icon-sass",
  },
  {
    name: "icon-mongodb",
  },
  {
    name: "icon-mysql",
  },
  {
    name: "icon-nodejs",
  },
  {
    name: "icon-php",
  },
  {
    name: "icon-python",
  },
  {
    name: "icon-symfony",
  },
  {
    name: "icon-magento",
  },
  {
    name: "icon-circleci",
  },
];

const Introduction = () => {
  return (
    <div className="Introduction">
      <div className="Introduction__section">
        <Separator />
        <div className="Introduction__name">
          <img src={ProfilePicture} alt="" className="Introduction__picture" />
          <h1>Mina AMROUCHE</h1>
          <h3>Freelancer</h3>
          <h3>Front-end developer</h3>
        </div>
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Contact details</h2>
        <Separator />
        <br />
        <div className="Introduction__contact">
          <ContactItem
            picto="icon-mail"
            content="mina.amrouche@iminait.com"
            link="mailto:mina.amrouche@iminait.com"
          />
          <ContactItem
            picto="icon-phone"
            content="+31 6 57 68 63 95"
            link="tel:+31657686395"
          />
          <ContactItem
            picto="icon-linkedin"
            content="linkedin.com/in/mina-amrouche-a67b81115/"
            link="https://www.linkedin.com/in/mina-amrouche-a67b81115/"
          />
          <ContactItem
            picto="icon-github"
            content="github.com/minaamrouche"
            link="https://github.com/minaamrouche"
          />
          <ContactItem picto="icon-map-pin" content="Den Haag" />
        </div>
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Technical skills</h2>
        <Separator />
        <br />
        <SkillItem icon="icon-javascript" percentage="100"></SkillItem>
        <SkillItem icon="icon-react" percentage="100"></SkillItem>
        <SkillItem icon="icon-vue" iconPaths={3} percentage="80"></SkillItem>
        <SkillItem icon="icon-angular" percentage="70"></SkillItem>
        <SkillItem icon="icon-git" percentage="100"></SkillItem>
        <SkillItem icon="icon-docker" percentage="85"></SkillItem>
        <SkillItem icon="icon-bootstrap" percentage="90"></SkillItem>
        <SkillItem icon="icon-jquery" percentage="80"></SkillItem>
        <SkillsList icons={pictos} />
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Languages</h2>
        <Separator />
        <br />
        <SkillItem icon="icon-france" iconPaths="4" percentage="100" />
        <SkillItem icon="icon-uk" iconPaths="15" percentage="90" />
      </div>
    </div>
  );
};

export default Introduction;
