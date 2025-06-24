import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "experience",
        },
        {
            id: 4,
            link: "skills",
        },
          {
            id: 5,
            link: "projects",
        },
 
    ];
    return (
        <div className="w-full h-20 bg-gray-900 flex justify-between items-center px-4 fixed z-50">
            <div>
                <h1 className='text-white font-signature text-3xl'>Shivangam</h1>
            </div>
            <ul className="hidden md:flex text-center">
                {
                    links.map(({ id, link }) => (
                        <li key={id} className='capitalize px-4 text-white cursor-pointer hover:underline decoration-sky-200 duration-1000 hover:scale-110'>
                           <Link to={link} smooth duration={500}>
                            {link}
                           </Link>
                            
                        </li>
                    ))
                }
            </ul>
            <div className='cursor-pointer md:hidden z-10 text-white' onClick={() => setMobileNav(!mobileNav)}>
                {
                    mobileNav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>
            {
                mobileNav && (
                    <ul className="flex text-center justify-center flex-col absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-black to-gray-800">
                        {
                            links.map(({ id, link }) => (
                                <li key={id} className='capitalize px-4 py-6 text-white cursor-pointer text-4xl'> <Link onClick={()=>setMobileNav(!mobileNav)} to={link} smooth duration={500}>
                            {link}
                           </Link></li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}
export default NavBar;