import "./Introduction.scss";
import { Separator } from "components/atoms";
import { ContactItem, Item, SkillItem, SkillsList } from "components/molecules";
import Image from "next/image";

const Introduction = () => {
  const trainings = [
    {
      title: `Certification PSM I (Professional Scrum Master I)
Nov 2018`,
      content: "Score : 98.8% - Scrum.org",
    },
  ];

  return (
    <div className="Introduction">
      <div className="Introduction__section">
        <Separator />
        <div className="Introduction__name">
          <Image
            src="/images/profile-picture.jpg"
            alt=""
            width={150}
            height={150}
            className="Introduction__picture"
          />
          <h1>Mina AMROUCHE</h1>
          <h3>Freelancer</h3>
          <h2>Front-end developer</h2>
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
          <ContactItem picto="icon-map-pin" content="The Hague, Netherlands" />
        </div>
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Technical skills</h2>
        <Separator />
        <br />
        <SkillItem icon="icon-javascript" percentage="100"></SkillItem>
        <SkillItem icon="icon-react" percentage="100"></SkillItem>
        <SkillItem icon="icon-vue" iconPaths={3} percentage="100"></SkillItem>
        <SkillItem icon="icon-angular" percentage="80"></SkillItem>
        <SkillItem icon="icon-git" percentage="100"></SkillItem>
        <SkillItem icon="icon-docker" percentage="85"></SkillItem>
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Languages</h2>
        <Separator />
        <br />
        <SkillItem icon="icon-france" iconPaths="4" percentage="100" />
        <SkillItem icon="icon-uk" iconPaths="15" percentage="95" />
      </div>
      <div className="Introduction__section">
        <Separator />
        <h2>Trainings & certifications</h2>
        <Separator />
        {trainings.map((item, index) => {
          return (
            <Item title={item.title} key={index}>
              {item.content}
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Introduction;
