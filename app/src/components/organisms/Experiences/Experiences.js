import React from "react";
import "./Experiences.scss";
import { Separator } from "components/atoms";
import { Item } from "components/molecules";

const Experiences = () => {
  const experiences = [
    {
      title: "Lead Front-end developer, UbiOps",
      dates: "Sep 2019 - June 2021",
      content:
        "Built the front-end of UbiOps from scratch within 6 months on my own, then with 2 junior developers. Close communication with the backend team to create a well-designed reliable REST API. I was in charge on the front-end releases and prioritizing tasks for internal improvements and requests from stakeholders.",
      technologies:
        "ReactJS, Redux, MUI, Docker, Gitlab CI, Kubernetes, Google Cloud.",
    },
    {
      title: "Front-end developer, Saegus",
      dates: "Apr 2018 - May 2019",
      content: `Fruitful collaboration with designers (UX, UI, graphic designers...) and data scientists. Development from scratch of several web applications for CAC40 companies : L'Oréal, Engie, Orange, TechnipFMC... Full project management including direct discussion with clients, costs estimation and development.`,
      technologies: "ReactJS, Angular, NodeJS, Vue.",
    },
    {
      title: "Fullstack web developer, Monsieur Biz",
      dates: "Sep 2016 - Mar 2018",
      content: `Maintainance and development of various e-commerce websites. Development from scratch of an e-commerce website & several apps using agile methodology.`,
      technologies:
        "Magento, Symfony, PHP, ReactJS, Docker, CircleCI, Jenkins.",
    },
  ];

  const education = [
    {
      title: "Master in Computer Science, Epitech",
      dates: "Sep 2015 - Sep 2018",
      content: "Paris, France",
    },
    {
      title: "Mathematics / Computer science, Bachelor, 2nd year",
      dates: "Sep 2014 - Sep 2015",
      content: "Faculté Saint-Charles, Marseille, France",
    },
    {
      title: "Mathematics / Physics / Chemistry, Bachelor, 1st year",
      dates: "Sep 2013 - Sep 2014",
      content: "Faculté Saint-Charles, Marseille, France",
    },
  ];
  const trainings = [
    {
      title: "Certification PSM I (Professional Scrum Master I)",
      dates: "Nov 2018",
      content: "Score : 98.8% - Scrum.org",
    },
    {
      title: "Symfony training",
      dates: "Sep 2016",
      content: "Jolicode - Paris",
    },
  ];
  const profile = `5 years of web development taught me that coding is all about creating and constantly improving. The quality and the clarity of the code is crucial for sharing and maintaining it in the future, but it shouldn't be an obstacle when something needs to be done quickly.
Professional but easy-going, I'm not afraid to take initiative and work until a problem is solved within a team or independently. I always do my best to understand what's asked of me and give my advise when it can help.`;

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
              {item.content}
              <br />
              <em>Main technologies: {item.technologies}</em>
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
      <div className="Experiences__section">
        <Separator />
        <h2>Training & certification</h2>
        <Separator />
        {trainings.map((item, index) => {
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
