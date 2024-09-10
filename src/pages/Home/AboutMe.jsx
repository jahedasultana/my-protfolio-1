import React from "react";
import { MdCastForEducation } from "react-icons/md";
const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col items-center p-8">
<p className="text-[#153b01] text-lg font-semibold">Get To Know More</p>
      <div className="relative mb-6">
            {/* Background Layer with Blur */}
            <div className="absolute inset-0 w-[80%] mx-auto h-10 rounded-full bg-[#7ac74f] blur-xl"></div>

            {/* Text Layer */}
            <div className="relative z-10">
              <p className="font-bold md:text-5xl text-2xl my-font mb-6">
              About Me
              </p>
            </div>
          </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex">
          <div className="text-center md:text-left py-6 px-6 border-2 md:py-10 md:px-20 rounded-md">
            <MdCastForEducation className="text-3xl mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold">Education</h2>
            <p className="text-[#8d918b] text-lg">
             2021 - BSS - Bachelor of Social Science
            </p>
            <p className="text-[#8d918b] text-lg">2023 - M.Sc.- Masters of Science</p>
          </div>
        </div>
        <div className="border-2 md:px-20 py-3 px-6 rounded-md">
          <p className="mt-4 text-center md:text-left max-w-2xl text-[#8d918b]">
            I am a dedicated frontend web developer with a passion for creating
            dynamic and responsive web applications. My expertise lies in using
            modern frameworks like React to build user-friendly interfaces that
            provide a seamless user experience. I take pride in writing clean,
            efficient code and continuously learning new technologies to enhance
            my skill set. With a keen eye for design and attention to detail, I
            strive to bridge the gap between design and technology, bringing
            creative ideas to life on the web.When I'm not coding, I enjoy
            singing in my free time.I am an avid reader and love immersing
            myself in books during my leisure time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
