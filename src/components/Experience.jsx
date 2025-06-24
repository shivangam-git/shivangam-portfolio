import React from "react";

const experiences = [
  {
    id: 1,
    company: "Accenture",
    location: "Gurugram",
    role: "Frontend Developer, Analyst",
    duration: "July 2023 - Present",
    points: [
      "Working on client and internal projects as a Front End Developer (ReactJs, ReactTs, HTML, CSS, SCSS, Bootstrap).",
      "Developed new features and optimized performance for seamless user experience.",
      "Integrated third-party libraries to enhance UI functionality.",
      "Translated Figma designs into reusable, efficient code.",
      "Contributed feature ideas and enhancements proactively.",
      "Used Azure Board for task tracking and timely completion.",
      "Integrated APIs using Postman and collaborated with backend teams.",
    ],
    techStack: ["React", "TypeScript", "SCSS", "Bootstrap", "Postman", "Azure DevOps"],
  },
  {
    id: 2,
    company: "Advantev (Internship)",
    location: "Remote (Chandigarh)",
    role: "Software Developer Intern",
    duration: "Jan 2023 - June 2023",
    points: [
      "Worked in a 7-member frontend team using React and JavaScript.",
      "Built scalable REST APIs using Node.js and Express.",
      "Improved UX clarity on client pages through feature development.",
      "Presented regular client demos and integrated feedback quickly.",
    ],
    techStack: ["React", "JavaScript", "Node.js", "Express","Postman","GitHub"],
  },
];

const Experience = () => {
  return (
    <div name="experience" className="bg-black text-white px-6 py-12 w-full">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block mb-8">Experience</h2>
        <div className="relative border-l-4 border-gray-600 pl-6 space-y-10">

          {experiences.map(({ id, company, role, location, duration, points, techStack }) => (
            <div key={id} className="group relative">
              <div className="absolute -left-3.5 w-7 h-7 bg-gray-500 rounded-full border-4 border-black group-hover:bg-blue-500 transition duration-300"></div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold">{company}</h3>
                <p className="text-sm text-gray-400">{role} • {location}</p>
                <p className="text-xs italic text-gray-400 mb-3">{duration}</p>

                <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-300">
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap mt-4 gap-2">
                  {techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-xs px-3 py-1 rounded-full text-white">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Experience;
