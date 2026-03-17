import "./Introduction.scss";
import { Separator, PictoDisplayer } from "components/atoms";
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
        <Separator width="100%" />
        <div className="Introduction__name">
          <Image
            src="/images/profile-picture.jpg"
            alt=""
            width={120}
            height={120}
            className="Introduction__picture"
          />
          <h1>Mina AMROUCHE</h1>
          <h3>Founder, IMinaIT</h3>
          <h2>Software Developer & Creative Technologist</h2>
          <p className="Introduction__languages">
            French (Native) &middot; English (Fluent)
          </p>
        </div>
      </div>
      <div className="Introduction__section">
        <Separator width="100%" />
        <h2>Contact details</h2>
        <Separator width="100%" />
        <br />
        <div className="Introduction__contact">
          <ContactItem
            picto="icon-mail"
            content="mina.amrouche@iminait.com"
            link="mailto:mina.amrouche@iminait.com"
          />
          <ContactItem
            picto="icon-phone"
            content="+33 6 10 73 56 53"
            link="tel:+33610735653"
          />
          <ContactItem picto="icon-map-pin" content="Paris, France" />
          <ContactItem
            picto="icon-monitor"
            content="iminait.com"
            link="https://iminait.com"
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
        </div>
      </div>
      <div className="Introduction__section">
        <Separator width="100%" />
        <h2>Technical skills</h2>
        <Separator width="100%" />
        <br />
        <div className="Introduction__skill-icons">
          <PictoDisplayer picto="icon-javascript" />
          <PictoDisplayer picto="icon-react" />
          <PictoDisplayer picto="icon-vue" numberOfPaths={3} />
          <PictoDisplayer picto="icon-nodejs" />
          <img
            src="/images/icons/typescript.svg"
            alt="TypeScript"
            className="Introduction__skill-svg"
          />
          <img
            src="/images/icons/tailwindcss.svg"
            alt="Tailwind CSS"
            className="Introduction__skill-svg"
          />
          <img
            src="/images/icons/nextjs.svg"
            alt="Next.js"
            className="Introduction__skill-svg"
          />
        </div>
      </div>
      <div className="Introduction__section">
        <Separator width="100%" />
        <h2>Tools & AI</h2>
        <Separator width="100%" />
        <br />
        <div className="Introduction__tags">
          <span>Figma</span>
          <span>Claude</span>
          <span>Cursor</span>
          <span>Git</span>
        </div>
      </div>
      <div className="Introduction__section">
        <Separator width="100%" />
        <h2>Education</h2>
        <Separator width="100%" />
        <Item title="Master in Computer Science, Epitech" dates="2015 - 2018">
          Paris, France
        </Item>
        <Item
          title="Mathematics / Computer Science, Bachelor"
          dates="2013 - 2015"
        >
          Aix-Marseille Université, France
        </Item>
      </div>
      <div className="Introduction__section">
        <Separator width="100%" />
        <h2>Trainings & certifications</h2>
        <Separator width="100%" />
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
