import React from 'react';
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Content Editor Tool",
            description: [
                "AI-powered React app for generating audience-tailored product descriptions.",
                "Features include regeneration, copy-to-clipboard, feedback system, and chatbot.",
                "Supports rewriting and generating benefits, features, titles, and meta descriptions.",
                "Tech Stack: React (TypeScript), Redux Toolkit, HTML, CSS, SCSS, Bootstrap."
            ],
        },
        {
            id: 2,
            title: "Go To Health",
            description: [
                "Healthcare web app that connects patients with medical providers and facilities.",
                "Users can search for medicines, book appointments, and access health info.",
                "Built with RESTful APIs for frontend-backend integration.",
                "Tech Stack: React.js, Node.js, Express.js, MongoDB, HTML, CSS."
            ]
        },
        {
            id: 3,
            title: "Portfolio",
            description: [
                "Responsive portfolio website to showcase skills, projects, and resume.",
                "Smooth scroll navigation and interactive UI using Tailwind CSS.",
                "Tech Stack: React.js, Tailwind CSS."
            ]
        }
    ];

    return (
        <div name="projects" className="bg-black text-white w-full min-h-screen px-6 py-10">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-bold mb-8 border-b-4 border-gray-600 inline-block">Projects</h2>

                <div className="grid sm:grid-cols-2 gap-8">
                    {projects.map(({ id, title, description }) => (
                        <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                            <ul className="list-disc text-sm text-gray-300 space-y-1">
                                {description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default Projects;