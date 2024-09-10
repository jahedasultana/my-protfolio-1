import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id) => {
    navigate(`#${id}`);
    smoothScroll(id);
  };

  const navLinks = (
    <>
      <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer">
        <a className="hover:text-[#3a910b]" onClick={() => handleNavClick("about")}>AboutMe</a>
      </li>
      <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer hover:text-[#3a910b]">
        <a onClick={() => handleNavClick("experience")}>Experience</a>
      </li>
      <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer hover:text-[#3a910b]">
        <a onClick={() => handleNavClick("project")}>Project</a>
      </li>
      <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer hover:text-[#3a910b]">
        <a onClick={() => handleNavClick("contact")}>Contact</a>
      </li>
    </>
  );

  return (
    <div>
      <div id="nav" className="navbar bg-[#F9FAFB]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div className="relative">
            {/* Background Layer with Blur */}
            <div className="absolute inset-0 w-[80%] mx-auto h-10 rounded-full bg-[#7ac74f] blur-xl"></div>

            {/* Text Layer */}
            <div className="relative z-10">
              <p className="font-bold md:text-4xl text-base my-font">
                Jaheda Sultana
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
