import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 mt-12 bg-gray-200">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/profile.php?id=100094120232292">
                <FaFacebook size={24} />
              </Link>
              <Link to="https://github.com/jahedasultana">
                <FaGithub size={24} />
              </Link>
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
