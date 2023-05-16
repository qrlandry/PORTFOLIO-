import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3B4A60] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4"> About </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p> Hi I am Quinn. Please take a look around! </p>
          </div>
          <div>
            <p>
              I am a fullstack developer with a background in customer services.
              My experience has equipped me with the ability to work
              collaboratively or independently, and to tackle complex
              challenges. I am passionate about my work, and I am committed to
              continuing my growth as a software developer. I strive to create
              innovative solutions that make a real difference in the lives of
              users, and I am always excited to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
