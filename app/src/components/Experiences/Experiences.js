import React from "react";
import "./Experiences.scss";
import Separator from "../Separator/Separator";
import Item from "../Item/Item";
import HobbiesList from "../HobbiesList/HobbiesList";
import SkillItem from "../SkillItem/SkillItem";

const Experiences = () => {
  const experiences = [
    {
      title: "Front-end web developer, Saegus",
      dates: "Apr 2018 - May 2019",
      content:
        "Fruitful collaboration with designers (UX, UI, graphist...) and data scientists. Development from scratch of several web applications for CAC40 companies (biggest french companies) : L'Oréal, Engie, Orange, TechnipFMC... Full project management including direct discussion with clients, costs estimation and development."
    },
    {
      title: "Fullstack web developer, Monsieur Biz",
      dates: "Sep 2016 - Mar 2018",
      content:
        "Maintainance and development of various e-commerce websites. Development from scratch of an e-commerce website with agile methodology. On my own, creation of 2 Symfony web applications (for internal use & for a client). Attendance to several web-related events (Symfony Live, PHP Forum, meetups...)."
    }
  ];

  const education = [
    {
      title: "Master in Computer Science, Epitech",
      dates: "Sep 2015 - Sep 2018",
      content: "Paris, France"
    },
    {
      title: "Mathematics / Computer science, Bachelor, 2nd year",
      dates: "Sep 2014 - Sep 2015",
      content: "Faculté Saint-Charles, Marseille, France"
    },
    {
      title: "Mathematics / Physics / Chemistry, Bachelor, 1st year",
      dates: "Sep 2013 - Sep 2014",
      content: "Faculté Saint-Charles, Marseille, France"
    },
    {
      title: "Baccalauréat (French high school diploma) specialised in Science",
      dates: "Sept 2010 - Jun 2013",
      content: "Lycée Thiers, Marseille, France"
    }
  ];
  const trainings = [
    {
      title: "Certification PSM I (Professional Scrum Master I)",
      dates: "Nov 2018",
      content: "Score : 98.8% - Scrum.org"
    },
    {
      title: "Scrum training",
      dates: "Nov 2018",
      content: "Saegus Institute - Paris"
    },
    {
      title: "Symfony training",
      dates: "Sep 2016",
      content: "Jolicode - Paris"
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
    <div className="Experiences">
      <div className="Experiences__section">
        <Separator />
        <h2>Experience</h2>
        <Separator />
        {experiences.map((item, index) => {
          return (
            <Item title={item.title} dates={item.dates} key={index}>
              {item.content}
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
      <div className="Experiences__two-columns">
        <div className="Experiences__section">
          <Separator />
          <h2>Hobbies</h2>
          <Separator />
          <HobbiesList icons={hobbies} />
        </div>
        <div className="Experiences__section">
          <Separator />
          <h2>Languages</h2>
          <Separator />
          <SkillItem icon="icon-france" iconPaths="4" percentage="100" />
          <SkillItem icon="icon-uk" iconPaths="15" percentage="70" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
