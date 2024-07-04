
import { Outlet, useLocation, useNavigate } from "react-router-dom";
 import Nav from "../pages/nav";
import { useEffect } from "react";

const Main = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate("#nav", { replace: true });
      }, [navigate]);


  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
        <div className="mx-auto max-w-7xl">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;