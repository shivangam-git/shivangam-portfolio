import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6">
        <p className="text-sm mb-4 sm:mb-0 text-center">&copy; {new Date().getFullYear()} Shivangam . All rights reserved.</p>
    </div>
  );
};

export default Footer;
