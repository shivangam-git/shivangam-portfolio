import React from 'react'
const About=()=>{
    return(
        <div name="about" className='w-full bg-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='mb-8 text-white text-4xl inline font-bold border-b-4 border-gray-400'>About</p>
                </div>
                <p className='text-xl'>I'm a Frontend Developer passionate about turning ideas into engaging and interactive web experiences. I have hands-on experience working with technologies like React.js, React.ts, JavaScript, TypeScript, HTML, CSS, SCSS, and Tailwind CSS to build clean, responsive, and user-friendly interfaces. I'm always working to sharpen my skills and excited to contribute to impactful, real-world projects.</p>
                    <br/>
                    <br/>
                <p className='text-xl'>My long-term goal is to grow into a Frontend Lead role. I'm also open to exploring backend development and contributing across the stack whenever the opportunity arises.</p>
            </div>
        </div>
    )
}
export default About;