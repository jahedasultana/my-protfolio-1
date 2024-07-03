import React from 'react';
import { MdCastForEducation } from "react-icons/md";
const AboutMe = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <p className='text-[#8d918b] font-semibold text-lg'>Get To Know More</p>
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <img
                    className="w-52 h-80 rounded-lg object-cover"
                    src="https://i.postimg.cc/bNvs7G9S/sathi-jpg2.jpg"
                    alt="Profile"
                />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                  
                    <div className="text-center md:text-left border-2 p-24 rounded-lg">
                    <MdCastForEducation className='text-3xl' />
                        <h2 className="text-2xl font-bold">Education</h2>
                        <p className='text-[#8d918b] text-lg'>BSS- Bachelor of Social Science</p>
                        <p className='text-[#8d918b] text-lg'>M.Sc.- Masters of Science</p>
                    </div>
              
                </div>
             
            </div>
            <p className="mt-4 text-center max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod
                voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo
                deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
            </p>
        </div>
    );
};

export default AboutMe;
