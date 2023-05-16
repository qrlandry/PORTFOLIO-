import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from 'react-scroll';
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const smallScreen = useMediaQuery({maxWidth: 1020})

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <h1 className="text-white text-2xl font-bold"> Portfolio </h1>
      </div>

      <ul className="hidden md:flex text-white">
        <li> 
          <Link to='home' smooth={true} duration={500}> Home </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}> About </Link> 
        </li>
        <li> 
          <Link to='skills' smooth={true} duration={500}> Skills </Link>
        </li>
        <li> 
          <Link to='work' smooth={true} duration={500}> Work </Link> 
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}> Contact </Link>
        </li>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-10 text-white cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white"
        }
      >
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='home' smooth={true} duration={500}> Home </Link> </li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='about' smooth={true} duration={500}> About </Link> </li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='skills' smooth={true} duration={500}> Skills </Link> </li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='work' smooth={true} duration={500}> Work </Link> </li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='contact' smooth={true} duration={500}> Contact </Link> </li>
      </ul>

      <div className="hidden lg:flex fixed felx-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://www.linkedin.com/in/quinn-landry/"
            >
              LinkedIn <AiFillLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://github.com/qrlandry"
            >
              Github <AiFillGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#405DE6] 
            via-[#5851DB] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] via-[#F56040] via-[#F77737] via-[#FCA545] to-[#FFDC80]"
          >
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://instagram.com/quinn_landry?igshid=MzRIODBiNWFIZA=="
            >
              Instagram <AiFillInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d2b48c]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://docs.google.com/document/d/1itc2zn9dk6VOvSi0jcyE813ncqBuXRpEoFxB9TadW_I/edit?usp=sharing"
            >
              Resume <HiOutlineDocumentText size={30} />
            </a>
          </li>
        </ul>
      </div>

      {smallScreen && (
      <div className="sm:flex fixed felx-col top-[35%] left-0">
        <ul>
          <li className="w-[120px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://www.linkedin.com/in/quinn-landry/"
            >
              LinkedIn <AiFillLinkedin size={20} />
            </a>
          </li>
          <li className="w-[120px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://github.com/qrlandry"
            >
              Github <AiFillGithub size={20} />
            </a>
          </li>
          <li
            className="w-[120px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#405DE6] 
            via-[#5851DB] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] via-[#F56040] via-[#F77737] via-[#FCA545] to-[#FFDC80]"
          >
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="https://instagram.com/quinn_landry?igshid=MzRIODBiNWFIZA=="
            >
              Instagram <AiFillInstagram size={20} />
            </a>
          </li>
          <li className="w-[120px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#d2b48c]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              href="#"
            >
              Resume <HiOutlineDocumentText size={20} />
            </a>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
};

export default Nav;
