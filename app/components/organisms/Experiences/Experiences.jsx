import "./Experiences.scss";
import { Separator } from "components/atoms";
import { Item } from "components/molecules";

const Experiences = () => {
  const profile = `With 8 years of web development experience, I am a front-end specialist, passionate about initiating and leading projects from scratch. Transitioning from back-end to expert-level JavaScript and front-end development, I excel in crafting seamless user experiences tailored to meet business goals and stakeholder expectations.`;

  const experiences = [
    {
      title: "Freelance Front-end developer, IMinaIT",
      dates: "Jun 2021 - Present",
      content: `<li>Developing a mobile-first Progressive Web App (PWA) using Vue3 and Firebase, featuring a complex, performance-optimized children's game.</li>
<li>Served as the sole front-end developer for an SSR Vue2 app, collaborating with backend developers and designers to enhance a national tennis platform.</li>
<li>Contributed to the enhancement of a social media campaign automation platform, working within a development team using Jira and Figma.</li>
<li>Sole front-end developer responsible for maintaining and improving a car rental app, utilizing Jira & Figma.</li>
<li>Developed a React-based PWA quiz game in partnership with a back-end developer.</li>`,
      technologies:
        "React, NextJS, Vue, GitHub CI, Firebase, JQuery, Vite, Figma, Typescript, Tailwind",
    },
    {
      title: "Lead Front-end developer, UbiOps",
      dates: "Sep 2019 - Jun 2021",
      content: `<li>Single-handedly developed the UbiOps platform's web interface in six months using React, Redux & MUI, while collaborating with the BE team for continuous enhancements.</li>
<li>Demonstrated leadership by recruiting and managing two junior developers.</li>`,
      technologies: "React, Redux, MUI, Docker, Gitlab CI, Kubernetes, GCloud",
    },
    {
      title: "Front-end developer, Saegus",
      dates: "Apr 2018 - May 2019",
      content: `<li>Developed 2 Angular web apps —a dataset labeling tool & a models showroom— in collaboration with a data engineer and a UX/UI designer.</li>
<li>Led an energy company project, creating a React landing page generator with reusable components.</li>
<li>Enhanced a gamification-based React app for employee training and evaluation.</li>`,
      technologies: "React, Angular, NodeJS, Vue, Bootstrap, Zeplin, Webpack",
    },
    {
      title: "Fullstack web developer, Monsieur Biz",
      dates: "Sep 2016 - Mar 2018",
      content: `<li>Maintained and developed various e-commerce websites, and built an e-commerce website and several apps from scratch using agile methodology.</li>`,
      technologies: "Magento, Symfony, PHP, React, Docker, CircleCI, JQuery",
    },
  ];

  const education = [
    {
      title: "Master in Computer Science, Epitech",
      dates: "Sep 2015 - Sep 2018",
      content: "Paris, France",
    },
    {
      title: "Mathematics / Computer science, Bachelor",
      dates: "Sep 2013 - Sep 2015",
      content: "Faculté Saint-Charles, Marseille, France",
    },
  ];

  return (
    <div className="Experiences">
      <div className="Experiences__profile">
        <h2>Profile</h2>
        <Separator />
        <Item>{profile}</Item>
      </div>

      <div className="Experiences__section">
        <Separator />
        <h2>Experience</h2>
        <Separator />
        {experiences.map((item, index) => {
          return (
            <Item title={item.title} dates={item.dates} key={index}>
              <p className="Experiences__technologies">
                Main technologies: {item.technologies}
              </p>
              <ul
                className="Experiences__content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></ul>
            </Item>
          );
        })}
      </div>
      <div className="Experiences__section">
        <Separator />
        <h2>Education</h2>
        <Separator />
        {education.map((item, index) => {
          return (
            <Item title={item.title} dates={item.dates} key={index}>
              {item.content}
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
