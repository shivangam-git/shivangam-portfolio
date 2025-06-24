import React from 'react'
const About=()=>{
    return(
        <div name="about" className='w-full bg-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='mb-8 text-white text-4xl inline font-bold border-b-4 border-gray-400'>About</p>
                </div>
                <p className='text-xl'> Hi, I'm a Frontend Developer who loves turning ideas into interactive web experiences.
                     I've been working with React.js, JavaScript, TypeScript Html, Css, Scss and Tailwind CSS to build clean, responsive UIs. I enjoy learning new technologies 
                     and writing code that not only works but looks good too. I'm constantly 
                    improving my skills and excited to contribute to real-world projects that make a difference.</p>
                    <br/>
                    <br/>
                <p className='text-xl'>My goal is to grow into a Frontend Lead, and I'm also open to exploring and contributing to Backend development when given the opportunity.</p>
            </div>
        </div>
    )
}
export default About;