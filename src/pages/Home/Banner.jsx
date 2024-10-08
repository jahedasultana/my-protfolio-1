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
              href="https://drive.google.com/file/d/1Mm64dUldT-JfsAHQUW43Rvxhoa8XeM76/view"
              className="btn btn-outline border-[#7ac74f] font-medium rounded-full hover:bg-[#7ac74f]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn text-white font-medium hover:bg-[#41a909] hover:underline bg-[#7ac74f] rounded-full py-2"
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