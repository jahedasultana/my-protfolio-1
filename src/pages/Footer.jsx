import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 mt-12 bg-[#F9FAFB]">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
          <div className="flex md:justify-start justify-center gap-4">
        <a target='_blank'  href="https://github.com/jahedasultana"><FaGithub size={24}/></a>
        <a target='_blank'  href="https://www.facebook.com/profile.php?id=100094120232292"><FaFacebook size={24}/></a>
        <a target='_blank'  href="https://www.linkedin.com/in/jahedasultana"><FaLinkedin size={24}/></a>
        <a target='_blank'  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new"><MdEmail size={24}/></a>
        
        </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2024. All rights reserved.</p>
              <p className="text-lg font-bold">Jaheda Sultana</p>
              <p className="font-bold">jahedasultana47@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
