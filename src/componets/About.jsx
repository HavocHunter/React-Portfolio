import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi everyone Iam G Shreenivasa i have recently graduated in the year 2023 from 
          Rao Bahadur Engineering collage Ballari with an CGPA of 8.29.
          This is my portfolio to showcase the skills which i have and combined them togther to form a 
          Project.
        </p>

        <br />

        <p className="text-xl">
          I have also provied various links such as linkedIn and my GitHub accounts.
          I have also proved my mail id and also my resume.Interested people can download my resume.
          About my experience and also my projects more details are provied below.
        </p>
      </div>
    </div>
  );
};

export default About;
