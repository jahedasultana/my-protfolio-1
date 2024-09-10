import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center p-8">
      <p className="text-[#153b01] text-lg font-semibold">Explore My</p>
      <div className="relative mb-6">
        {/* Background Layer with Blur */}
        <div className="absolute inset-0 w-[80%] mx-auto h-10 rounded-full bg-[#7ac74f] blur-xl"></div>

        {/* Text Layer */}
        <div className="relative z-10">
          <p className="font-bold md:text-5xl text-2xl my-font mb-6">
            Experience
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="border rounded-lg p-6 md:px-16 md:py-12 shadow-lg">
          <h2 className=" text-2xl md:text-3xl font-bold mb-6">
            Frontend Development
          </h2>
          <ul className="list-none space-y-2">
            <div className="flex justify-between">
              <div className="">
                <li className="flex gap-2 mb-2">
                  <FaHtml5 className="text-[#f18805] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    HTML
                  </span>
                </li>
                <li className="flex gap-2 mb-2">
                  <DiCss3 className="text-[#3d52d5] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    CSS
                  </span>
                </li>
                <li className="flex gap-2 mb-2">
                  <IoLogoJavascript className="text-[#ffe66d] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    JavaScript
                  </span>
                </li>
              </div>
              <div>
                <li className="flex gap-2 mb-2">
                  <RiTailwindCssLine className="text-[#05668d] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    Tailwind
                  </span>
                </li>
                <li className="flex gap-2 mb-2">
                  <FaReact className="text-[#05668d] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    React
                  </span>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="border rounded-lg p-6 md:px-16 md:py-12 shadow-lg ">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Backend Development
          </h2>
          <ul className="list-none space-y-2">
            <div className="flex justify-between">
              <div>
                <li className="flex gap-2 mb-2">
                  <SiMongodb className="text-[#679436] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    MongoDB
                  </span>
                </li>
                <li className="flex gap-2 mb-2">
                  <FaNodeJs className="text-[#679436] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    Node JS
                  </span>
                </li>
                <li className="flex gap-2 mb-2">
                  <IoLogoFirebase className="text-[#ffb627] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    Firebase Auth
                  </span>
                </li>
              </div>
              <div>
                <li className="flex gap-2 mb-2">
                  <SiExpress className="text-[#05668d] text-2xl md:text-4xl  rounded-xl" />
                  <span className="text-lg md:text-2xl font-bold text-[#8d918b]">
                    Express JS
                  </span>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
