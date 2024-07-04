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
          <a onClick={() => handleNavClick("about")}>AboutMe</a>
        </li>
        <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer">
          <a onClick={() => handleNavClick("experience")}>Experience</a>
        </li>
        <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer">
          <a onClick={() => handleNavClick("project")}>Project</a>
        </li>
        <li className="font-semibold text-xl hover:underline hover:-translate-y-0.5 hover:cursor-pointer">
          <a onClick={() => handleNavClick("contact")}>Contact</a>
        </li>
  
      </>
    );
  
  
  
  
      return (
          <div>
              <div id="nav" className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navLinks}
  
        </ul>
      </div>
      {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      <p className="font-semibold text-3xl">Jaheda Sultana</p>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navLinks}
      </ul>
    </div>
  
  </div>
          </div>
      );
  };
  
  export default Nav;