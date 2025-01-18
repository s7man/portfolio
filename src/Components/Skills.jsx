import React from "react";
import C from '../assets/C.png';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JS.png';
import ReactJS from '../assets/React.png';
import NodeJS from '../assets/NodeJS.png';
import MongoDB from '../assets/MongoDB.png';
import Python from '../assets/Python.png';
import Cpp from '../assets/Cpp.png';
import JAVA from '../assets/JAVA.png';
import Express from '../assets/Express.png';

const skills = [
  {
    title: "C",
    img: C
  },
  {
    title: "C++",
    img: Cpp
  },
  {
    title: "JAVA",
    img: JAVA
  },
  {
    title: "HTML",
    img: HTML
  },
  {
    title: "CSS",
    img: CSS
  },
  {
    title: "JavaScript",
    img: JavaScript
  },
  {
    title: "React",
    img: ReactJS
  },
  {
    title: "Node",
    img: NodeJS
  },
  {
    title: "MongoDB",
    img: MongoDB
  },
  {
    title: "Express",
    img: Express
  },
  {
    title: "Python",
    img: Python
  }
];

const Skills = () => {
  return (
    <div name="Skills" className="max-w-screen-2xl max-h-screen container mx-auto border-2 border-blue-500 rounded-lg shadow-lg p-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold">SKILLS</h2>
      {
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center border rounded-lg border-blue-400 shadow-md hover:scale-110">
              <img src={skill.img} alt={skill.title} className="w-20 h-20 md:w-32 md:h-32 object-contain" />
              <p className="mt-2 text-lg md:text-xl font-semibold">{skill.title}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Skills;
