import React from 'react';
import pic from '../assets/myPic.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-black"
    >
      <div className="max-w-screen-lg h-screen mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hey! I'm Shivangam
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a Frontend Developer with over 2 years of experience in designing and building user-centric, responsive web applications using modern technologies like React, JavaScript, and Tailwind CSS.</p>

          <div>
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className='h-[300px] w-[300px]'>
          <img
            src={pic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}
export default Home;