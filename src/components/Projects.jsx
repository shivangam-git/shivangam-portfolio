import React from 'react';
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Content Editor Tool",
            description: [
                "AI-powered React app for generating audience-tailored product descriptions, benefits, features, titles, and meta descriptions",
                "Features include regeneration, rewrite, copy-to-clipboard, feedback system",
                "Integrated chatbot for real-time assistance",
                "Built a Settings page that allows clients to define and customize the style, Words and Phrases to Avoid, Examples and types of product descriptions best suited for their brand identity",
                "Built Input forms with validation to ensure data integrity and user-friendly experience",
                "Integrated OpenAI APIs for dynamic content generation",
                "Implemented state management and UX improvements for a seamless user flow",
                "Tech Stack: React (TypeScript), Redux Toolkit, HTML, CSS, SCSS, Bootstrap"
            ],
        },
        {
            id: 2,
            title: "Go To Health",
            description: [
                "Healthcare web app that connects patients with medical providers and facilities",
                "Users can search for medicines, book appointments, and access health information",
                "Integrated RESTful APIs for real-time data retrieval and updates",
                "Created CRUD API endpoints for managing user profiles, appointments, and medical records",
                "Built with RESTful APIs for frontend-backend integration",
                "Created login and registration functionality from scratch",
                "Created a user-friendly interface with responsive design for seamless navigation",
                "Tech Stack: React.js, Node.js, Express.js, MongoDB, HTML, CSS"
            ]
        },
        {
            id: 3,
            title: "Portfolio",
            description: [
                "Responsive portfolio website to showcase skills, projects, and resume",
                "Implemented smooth scroll navigation and an interactive UI using Tailwind CSS for a seamless user experience",
                "Created sections for Home, About, Experience, Projects, and Contact",
                "Includes downloadable resume, live project demos, and a contact form for quick outreach",
                "Tech Stack: React.js, Tailwind CSS"
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