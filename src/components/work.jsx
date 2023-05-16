import React from "react";
import WorkoutBuddy from "../assets/WB2.png";
import CopingCorner from "../assets/CC.png";
import Flappy from "../assets/FB.png";
import { useState } from "react";

const Work = () => {
  const [WB, setWB] = useState(false);
  const [CC, setCC] = useState(false);
  const [flappy, setFlappy] = useState(false);

  const handleWB = () => {
    setWB(!WB);
  };

  const handleCC = () => {
    setCC(!CC);
  };

  const handleFlappy = () => {
    setFlappy(!flappy);
  };
  return (
    <div name="work" className="w-full md:h-screen bg-[#3B4A60] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-white">
            {" "}
            Work{" "}
          </p>
          <p className="py-6"> // Check out some of my projects </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkoutBuddy})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/qrlandry/WorkoutBuddy"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    {" "}
                    Code{" "}
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    {" "}
                    No Demo Available{" "}
                  </button>
                </a>

                <button
                  onClick={handleWB}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg"
                >
                  {" "}
                  Details{" "}
                </button>
                {WB && (
                  <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="w-96 division p-6 rounded-md text-white">
                      <h2 className="text-xl font-bold mb-4">WorkoutBuddy</h2>
                      <p>
                        This capstone project is built using Django, Python
                        views, HTML, JS, and BootStrap. Allows user to create
                        and account, and create and share exercises. The user
                        will also be able to create workouts using the exercises
                        in the Database. The user can also track their weight
                        goals.
                      </p>
                      <button
                        className="mt-4 bg-white text-gray-600 px-4 py-2 rounded-md"
                        onClick={handleWB}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${CopingCorner})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Duncan-Wood/Coping-Corner-Frontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    {" "}
                    Code{" "}
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    {" "}
                    No Demo Available{" "}
                  </button>
                </a>
                <button
                  onClick={handleCC}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg"
                >
                  {" "}
                  Details{" "}
                </button>
                {CC && (
                  <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="w-96 division p-6 rounded-md text-white">
                      <h2 className="text-xl font-bold mb-4">Coping Corner</h2>
                      <p>
                        This collaborative project was built using the PERN
                        stack. The purpose of this project is to allow the user
                        to help combat negative feelings by creating, sharing,
                        or favoriting resource cards. The user may also give
                        likes to resources.
                      </p>
                      <button
                        className="mt-4 bg-white text-gray-600 px-4 py-2 rounded-md"
                        onClick={handleCC}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Flappy})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://github.com/qrlandry/Project1-" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    {" "}
                    Code{" "}
                  </button>
                </a>
                <a href="https://flappyp1.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    {" "}
                    Demo{" "}
                  </button>
                </a>
                <button
                  onClick={handleFlappy}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg"
                >
                  {" "}
                  Details{" "}
                </button>
                {flappy && (
                  <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="w-96 division p-6 rounded-md text-white">
                      <h2 className="text-xl font-bold mb-4">Flappy</h2>
                      <p>
                        This flappy bird emulator was built with Javascript,
                        CSS, and HTML. The goal of this game is to beat the your
                        previous scores.
                      </p>
                      <button
                        className="mt-4 bg-white text-gray-600 px-4 py-2 rounded-md"
                        onClick={handleFlappy}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
