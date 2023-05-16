import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#3B4A60]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white"> Hi my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          {" "}
          Quinn Landry{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-300">
          {" "}
          Full Stack Developer.{" "}
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
          I am a full stack developer who focuses on bulding and designing a fun
          experience for the user. Currently, I am focused on building
          responsive full stack applications.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0a192f] hover:border-[#0a192f] ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
