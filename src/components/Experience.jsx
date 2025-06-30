import React from "react";

const experiences = [
  {
    id: 1,
    company: "Accenture",
    location: "Gurugram",
    role: "Frontend Developer, Analyst",
    duration: "July 2023 - Present",
    points: [
      "Contributed to both client-facing and internal projects using React.js, React.ts, HTML, CSS, SCSS, and Bootstrap",
      "Developed and maintained scalable, responsive web applications using React.js, TypeScript, HTML5, CSS3, SCSS, and Bootstrap",
      "Integrated third-party libraries (eg. react-slick, moment, dompurify, recharts, React Toastify, modals, react-table) to enhance UI functionality",
      "Converted Figma designs into efficient code and devoped UI features from scratch",
      "Collaborated closely with the design team to implement UI features, coordinated with backend developers for seamless API integration and supported QA processes through timely fixes and testable code",
      "Participated in Agile/Scrum sprints, used Azure Boards for task tracking and ensured on-time feature delivery",
      "Resolved security issues by sanitizing dangerouslySetInnerHTML, upgrading vulnerable packages, and preventing sensitive data exposure by removing username from API requests",
      "Built a reusable custom hook for popup modal state management and enhanced an existing API hook to reduce redundancy, improving maintainability and code efficiency",
      "Optimized performance by preventing unnecessary re-renders of a heavy component using memoization and state management techniques, resulting in a 10-20% reduction in re-renders"
    ],
    techStack: ["React", "TypeScript", "SCSS", "Bootstrap", "Postman", "Azure DevOps"],
  },
  {
    id: 2,
    company: "Advantev (Internship)",
    location: "Remote (Chandigarh)",
    role: "Software Developer Intern (MERN Stack)",
    duration: "Jan 2023 - June 2023",
    points: [
      "Quickly learned and applied all MERN stack technologies (MongoDB, Express.js, React.js, Node.js) to deliver end-to-end web solutions",
      "Built scalable REST APIs using Node.js and Express.",
      "Improved UX clarity on client pages through feature development.",
      "Maintained version control and collaborated using Git and GitHub, regularly handling code reviews and merge requests",
      "Conducted regular client demos, gathered feedback, and quickly implemented changes to meet evolving requirements",
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
