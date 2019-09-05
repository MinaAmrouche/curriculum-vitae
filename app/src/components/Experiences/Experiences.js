import React from "react";
import "./Experiences.scss";
import Separator from "../Separator/Separator";
import Item from "../Item/Item";
import HobbiesList from "../HobbiesList/HobbiesList";

const Experiences = () => {
  const experiences = [
    {
      title: "Consultant, Saegus",
      dates: "Apr 2018 - May 2019",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Web developer, Monsieur Biz",
      dates: "Sep 2016 - Mar 2018",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    }
  ];

  const education = [
    {
      title: "Master in Computer Science, Epitech",
      dates: "Sep 2015 - Sep 2018",
      content: "Paris, France"
    },
    {
      title: "Mathématiques-Informatique, Licence 2",
      dates: "Sep 2014 - Sep 2015",
      content: "Marseille, France"
    },
    {
      title: "Faculté Saint-Charles – Marseille CUPGE (Cycle Universitaire Préparatoire aux Grandes Écoles), Licence 1",
      dates: "Sep 2013 - Sep 2014",
      content: "Marseille, France"
    }
  ];
  const trainings = [
    {
      title: "Certification PSM I (Professional Scrum Master I)",
      dates: "Nov 2018",
      content: "Score : 98.8% Scrum.org"
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
      </div>
    </div>
  );
};

export default Experiences;
