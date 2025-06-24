import React from 'react'
import azure from '../assets/azure-icon-svgrepo-com.svg'
import bootstrap from '../assets/bootstrap-svgrepo-com.svg'
import css from '../assets/css-svgrepo-com.svg'
import git from '../assets/git-icon-logo-svgrepo-com.svg'
import html from '../assets/html-svgrepo-com.svg'
import java from '../assets/java-svgrepo-com.svg'
import javascript from '../assets/javascript-logo-svgrepo-com.svg'
import mongodb from '../assets/mongodb-svgrepo-com.svg'
import nodejs from '../assets/nodejs-logo-svgrepo-com.svg'
import postman from '../assets/postman-icon-svgrepo-com.svg'
import react from '../assets/react-svgrepo-com.svg'
import redux from '../assets/redux-logo-svgrepo-com.svg'
import scss from '../assets/scss-svgrepo-com.svg'
import tailwind from '../assets/tailwind-css-svgrepo-com.svg'
import typescript from '../assets/typescript-svgrepo-com.svg'
import vscode from '../assets/visual-studio-code-svgrepo-com.svg'
import expressjs from '../assets/expressjs.jpg'



const Skills = () => {
    const proficient = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: "shadow-green-400",
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: "shadow-green-400",
        },
        {
            id: 3,
            src: scss,
            title: 'SCSS',
            style: "shadow-green-400",
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: "shadow-green-400",
        },
        {
            id: 5,
            src: redux,
            title: 'Redux-Toolkit',
            style: "shadow-green-400",
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: "shadow-green-400",
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: "shadow-green-400",
        },
        {
            id: 8,
            src: javascript,
            title: 'JavaScript',
            style: "shadow-green-400",
        },
        {
            id: 9,
            src: typescript,
            title: 'TypeScript',
            style: "shadow-green-400",
        },
    ]

    const familiar = [
        {
            id: 10,
            src: java,
            title: 'Java',
             style: "shadow-orange-400",
        },
        {
            id: 11,
            src: mongodb,
            title: 'MongoDb',
             style: "shadow-orange-400",
        },
        {
            id: 12,
            src: nodejs,
            title: 'NodeJS',
             style: "shadow-orange-400",
        },
        {
            id: 13,
            src: expressjs,
            title: 'ExpressJS',
             style: "shadow-orange-400",
        },

    ]

const tools = [
        {
            id: 14,
            src: git,
            title: 'Git',
             style: "shadow-sky-400",
        },
        {
            id: 15,
            src: vscode,
            title: 'VSCode',
             style: "shadow-sky-400",
        },
        {
            id: 16,
            src: postman,
            title: 'Postman',
             style: "shadow-sky-400",
        },
        {
            id: 17,
            src: azure,
            title: 'Azure',
             style: "shadow-sky-400",
        },

    ]

    return (
        <div
            name="skills"
            className="bg-black w-full min-h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6 mt-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 text-center py-8 px-12 sm:px-0">
                    {proficient.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto bg-white rounded-2xl p-4" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="py-6">These are the technologies I'am familiar with</p>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                        {familiar.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto bg-white rounded-2xl p-4" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="py-6">These are the tools I've worked with</p>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                        {tools.map(({ id, src, title ,style}) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto bg-white rounded-2xl p-4" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;