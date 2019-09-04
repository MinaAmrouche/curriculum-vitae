import React from "react";
import "./Experiences.scss";
import Separator from "../Separator/Separator";
import Item from "../Item/Item";

const Experiences = () => {
  const experiences = [
    {
      title: "Consultant, Saegus",
      dates: "April 2018 - May 2019",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Web developer, Monsieur Biz",
      dates: "September 2016 - March 2018",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    }
  ];

  const education = [
    {
      title: "Master in Computer Science, Epitech",
      dates: "September 2015 - September 2018",
      content: "Paris, France"
    },
    {
      title: "Mathématiques-Informatique, Licence 2",
      dates: "September 2014 - September 2015",
      content: "Marseille, France"
    },
    {
      title: "Faculté Saint-Charles – Marseille CUPGE (Cycle Universitaire Préparatoire aux Grandes Écoles), Licence 1",
      dates: "September 2014 - September 2015",
      content: "Marseille, France"
    }
  ];
  const trainings = [
    {
      title: "Certification PSM I (Professional Scrum Master I)",
      dates: "November 2018",
      content: "Score : 98.8% Scrum.org"
    },
    {
      title: "Formation Symfony",
      dates: "September 2016",
      content: "Jolicode - Paris"
    }
  ];
  return (
    <div className="Experiences">
      <div className="Experiences__section">
        <Separator />
        <h2>Experiences</h2>
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
        <h2>Trainings & certifications</h2>
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
