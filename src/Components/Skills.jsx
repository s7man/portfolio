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
    img: C,
    level: "Advanced"
  },
  {
    title: "C++",
    img: Cpp,
    level: "Advanced"
  },
  {
    title: "JAVA",
    img: JAVA,
    level: "Intermediate"
  },
  {
    title: "HTML",
    img: HTML,
    level: "Advanced"
  },
  {
    title: "CSS",
    img: CSS,
    level: "Intermediate"
  },
  {
    title: "JavaScript",
    img: JavaScript,
    level: "Advance"
  },
  {
    title: "React",
    img: ReactJS,
    level: "Advanced"
  },
  {
    title: "Node",
    img: NodeJS,
    level: "Intermediate"
  },
  {
    title: "MongoDB",
    img: MongoDB,
    level: "Basic"
  },
  {
    title: "Express",
    img: Express,
    level: "Intermediate"
  },
  {
    title: "Python",
    img: Python,
    level: "Basic"
  }
];

const Skills = () => {
  return (
    // <div name="Skills" className="max-w-screen-2xl max-h-screen container mx-auto border-2 border-blue-500 rounded-lg shadow-lg p-4 bg-white">
    //   <h2 className="text-2xl md:text-3xl font-bold">SKILLS</h2>
    //   {
    //     <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
    //       {skills.map((skill, index) => (
    //         <div key={index} className="flex flex-col items-center border rounded-lg border-blue-400 shadow-md hover:scale-110">
    //           <img src={skill.img} alt={skill.title} className="w-20 h-20 md:w-32 md:h-32 object-contain" />
    //           <p className="mt-2 text-lg md:text-xl font-semibold">{skill.title}</p>
    //         </div>
    //       ))}
    //     </div>
    //   }
    // </div>

    <div>
      <div name="Skills" className="max-w-screen-2xl max-h-screen container mx-auto border-2 border-blue-500 rounded-lg shadow-lg p-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center border rounded-full border-blue-400 shadow-md px-3 py-2 hover:scale-105 transition-transform">
              <img src={skill.img} alt={skill.title} className="w-10 h-10 md:w-20 md:h-20 object-contain" />
              <div className="ml-4">
                <p className="text-sm md:text-xl font-semibold">{skill.title}</p>
                <p className="text-xs text-gray-500">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
