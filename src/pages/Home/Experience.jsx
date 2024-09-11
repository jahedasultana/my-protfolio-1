import html from "../../assets/images/html-5.png";
import tailwindIcon from "../../assets/images/icons8-tailwind-css-96.png";
import jsIcon from "../../assets/images/js.png";
import reactIcon from "../../assets/images/atom.png";
import firebaseIcon from "../../assets/images/icons8-firebase-96.png";
import nodejsIcon from "../../assets/images/nodejs.png";
import mongodbIcon from "../../assets/images/icons8-mongodb-96.png";
import gitIcon from "../../assets/images/code.png";
import jwt from "../../assets/images/icons8-jwt-96.png";
import redux from "../../assets/images/icons8-redux-96.png";
import typescript from "../../assets/images/icons8-typescript-96.png";
import nextJs from "../../assets/images/next-js.jpg";
import vsCodeIcon from "../../assets/images/visual-studio.png";
import Marquee from "react-fast-marquee";

const Experience = () => {
  const technologies = [
    { name: 'Html', description: 'Programming Language', icon: html },
    { name: 'Tailwind', description: 'CSS Framework', icon: tailwindIcon },
    { name: 'Javascript', description: 'Programming Language', icon: jsIcon },
    { name: 'React', description: 'Frontend Library', icon: reactIcon },
    { name: 'Firebase', description: 'Backend as a service', icon: firebaseIcon },
    { name: 'Node js', description: 'Javascript Runtime', icon: nodejsIcon },
    { name: 'MongoDB', description: 'NoSQL Database', icon: mongodbIcon },
    { name: 'Git', description: 'Version Controller', icon: gitIcon },
    { name: 'JWT', description: 'Code Editor', icon: jwt },
    { name: 'Redux', description: 'Code Editor', icon: redux },
    { name: 'Typescript', description: 'Code Editor', icon: typescript },
    { name: 'NextJs', description: 'Code Editor', icon: nextJs },
    { name: 'Vs Code', description: 'Code Editor', icon: vsCodeIcon },
  ];

  return (
    <div id="experience" className="dark:text-gray-800 py-10 mt-6 mb-20 font-mon">
      <div className="relative flex-col justify-center">
        <div className="absolute inset-0 w-[20%] top-5 mx-auto h-10 rounded-full bg-[#7ac74f] blur-xl"></div>
        <div className="relative">
          <p className="text-[#153b01] text-center text-lg font-semibold">Explore My</p>
          <h1 className="md:text-5xl text-2xl text-center my-font font-bold mb-10">Experience</h1>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="max-w-6xl relative p-2 mx-auto mt-20">
        {/* Black Blur Effect on Left */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#52bc18] via-transparent to-transparent blur-xl z-10"></div>
        
        {/* Black Blur Effect on Right */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#54d210] via-transparent to-transparent blur-xl z-10"></div>
        
        <Marquee gradient={false} speed={50}>
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center mx-4">
              <img src={tech.icon} alt={tech.name} className="w-24 h-24" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Experience;
