import React from "react";

const projects = [
  {
    img: "https://threedio-prod-var-cdn.icons8.com/xj/preview_sets/previews/qmkOKVxBws0JRoBV.webp",
    pName: "BookSelf",
    Description: "It is like online library.",
    gitHub: "https://github.com/Subhadip1001/BookShelf"
  },
  {
    img:"https://www.apurple.co/wp-content/uploads/2024/04/Uber-Clone-App-For-Higher-ROI.webp",
    pName: "Uber Clone",
    Description: "Similar to an Uber mobile app, featuring a real-time tracking system.",
    gitHub: "https://github.com/Subhadip1001/Uber-clone"
  },
  {
    img:"",
    pName: "Working...",
    Description: "working on new project",
    gitHub: ""
  }
];

const Projects = () => {
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 md:my-32 border-2 border-blue-500 rounded-lg shadow-lg p-4 bg-white"
    >
      <h2 className="text-2xl md:3xl font-bold mb-5">PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img src={project.img} alt={project.pName} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">{project.pName}</h3>
            <p className="mt-2">{project.Description}</p>
            <a
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600"
            >
            GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
