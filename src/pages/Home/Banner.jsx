// import img3 from '/sathi-sathi.png';

// const Banner = () => {
//   return (
//     <section className=" dark:text-gray-800">
//       <div className="max-w-screen-lg flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
//         <div className="">
//           <img
//             src={img3}
//             alt=""
//             className="object-cover rounded-full size-72 border-4 p-2 border-[#8d918b] md:size-96"
//           />
//         </div>
//         <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg space-y-3">
//           <h3 className="text-xl font-semibold text-[#8d918b]">Hello, I'm</h3>
//           <h1 className="text-5xl font-bold">Jaheda Sultana</h1>
//           <h1 className="text-3xl text-[#8d918b] font-bold">
//             Frontend Developer
//           </h1>

//           <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
//             <a target="_blank" href="https://drive.google.com/file/d/1tfkmsdxVIITUD03oakAyv4Y21NrD-LED/view?usp=sharing" className="btn btn-outline border-[#596475] font-medium rounded-full hover:bg-[#596475]">Download CV</a>
//             <a href="#contact" className="btn text-white font-medium hover:bg-[#140f2d] bg-[#596475] rounded-full py-2">
//               Contact Info
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import { FaFacebook, FaGithub } from "react-icons/fa";
import img3 from "../../assets/sumu.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <section className="flex md:h-[550px]  flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
      {/* Left Side */}

      <div className="flex-1 text-center flex-col h-full items-center  justify-center md:space-y-16 space-y-8 md:text-left">
        <div className="flex md:justify-start justify-center gap-4">
        <a target='_blank'  href="https://github.com/jahedasultana"><FaGithub size={24}/></a>
        <a target='_blank'  href="https://www.facebook.com/profile.php?id=100094120232292"><FaFacebook size={24}/></a>
        <a target='_blank'  href="https://www.linkedin.com/in/jahedasultana"><FaLinkedin size={24}/></a>
        <a target='_blank'  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new"><MdEmail size={24}/></a>
        
        </div>
        <div>
          <div className="text-4xl text-gray-600 md:text-xl mb-4">
            Hi There,
          </div>
          {/* <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            I Am a Frontend Developer
          </h1> */}

          <div>
          <h2 className="text-3xl text-black font-extrabold">I Am a  <span style={{ color: 'black', fontWeight: 'extrabold', fontSize: 'text-3xl' }}>
          <Typewriter
            words={['Frontend Developer','React JS Developer']}
            loop={1000000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h2>

          </div>
          <p className="text-gray-600 mb-6">
          I am a dedicated frontend web developer with a passion for creating dynamic and responsive web applications.My contact information is provided below.
          </p>
          <div className="flex md:justify-start justify-center items-center gap-4">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1tfkmsdxVIITUD03oakAyv4Y21NrD-LED/view?usp=sharing"
              className="btn btn-outline border-[#7ac74f] font-medium rounded-full hover:bg-[#7ac74f]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn text-white font-medium hover:bg-[#41a909] bg-[#7ac74f] rounded-full py-2"
            >
              Contact Info
            </a>
          </div>
        </div>
        <div className="md:flex space-y-2  items-center gap-6">
          <div>
            <h4 className="text-xl font-bold">Email:</h4>
            <p className="text-gray-600">jahedasultana47@gmail.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Location:</h4>
            <p className="text-gray-600">Dhaka, Shariatpur</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 relative mt-8 md:mt-0">
        <div className="bg-cover md:absolute -top-72 left-40 h-auto w-[300px] md:w-[400px] mx-auto ">
          <img
            src={img3} // Replace this with your image URL
            alt="Banner"
            className="w-full h-full rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
