import img1 from "../../assets/Health-Track.png";
import img2 from "../../assets/Fitness-Tracker-Home.png";
import img3 from "../../assets/Foods-Project-Home.png";

const Projects = () => {
  return (
    <div id="project" className=" ">
      <div className="relative flex-col justify-center">
        <div className="absolute inset-0 w-[20%] top-5 mx-auto h-10 rounded-full bg-[#7ac74f] blur-xl"></div>
        <div className="relative">
        <p className="text-[#153b01] text-center text-lg font-semibold">
          Browse My Recent
        </p>
        <h1 className="md:text-5xl text-2xl text-center my-font font-bold mb-10">Projects</h1>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-4">
        {/* card1 */}
        <div className="border-2 shadow-xl w-full bg-white">
          <figure className="overflow-hidden">
            <img
              src={img1}
              className="w-full hover:scale-150 transition-all duration-700 h-[350px] object-cover object-top rounded-t-md"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-2xl font-bold text-black/90">Health-Track</h3>

            <p className="text-[#8d918b] mt-1 mb-1">
              <span className="font-bold">Technologies: </span>  
               React.js, Tailwind CSS , firebase, motion, Node.js, Express.js, MongoDB
            </p>

            <div className="flex gap-3 mt-3 md:gap-4 flex-wrap">
              <a
                href="https://health-track-pi.vercel.app/"
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Live site
              </a>
              <a
                href="https://github.com/jahedasultana/Health-Track"
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Source code
              </a>
              {
                <a
                  href="https://github.com/jahedasultana/Health-Track-server"
                  target="_blank"
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
                >
                  Server code
                </a>
              }
            </div>
          </div>
        </div>
       
        {/* card2 */}
        <div className="border-2 shadow-xl w-full bg-white">
          <figure className="overflow-hidden">
            <img
              src={img2}
              className="w-full hover:scale-150 transition-all duration-700 h-[350px] object-cover object-top rounded-t-md"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-2xl font-bold">Fitness-Tracker</h3>

            <p className="text-[#8d918b] mt-1 mb-1">
              <span className="font-bold">Technologies: </span>React.js,
              JWT, React-simple-typewriter, Express.js, MongoDB, TanStack Query...
            </p>

            <div className="flex gap-3 mt-3 md:gap-4 flex-wrap">
              <a
                href="https://pha12-fitness-tracker-client-seven.vercel.app/"
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Live site
              </a>
              <a
                href="https://github.com/jahedasultana/fitness-tracker-client"
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Source code
              </a>
              {
                <a
                  href="https://github.com/jahedasultana/fitness-tracker-server"
                  target="_blank"
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
                >
                  Server code
                </a>
              }
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="border-2 shadow-xl w-full bg-white">
          <figure className="overflow-hidden">
            <img
              src={img3}
              className="w-full hover:scale-150 transition-all duration-700 h-[350px] object-cover object-top rounded-t-md"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-2xl font-bold">Food-donate</h3>
            <p className="text-[#8d918b] mt-1 mb-1">
              <span className="font-bold">Technologies:</span> react-router-dom,
              JWT for authentication, React-simple-typewriter
            </p>

            <div className="flex gap-3 mt-3 md:gap-4 flex-wrap">
              <a
                href="https://food-projects-9d8e7.web.app"
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Live site
              </a>
              <a
                href="https://github.com/jahedasultana/pha11-food-donator-client"
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Source code
              </a>
              {
                <a
                  href="https://github.com/jahedasultana/pha11-food-donator-server"
                  target="_blank"
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base hover:bg-[#41a909] bg-[#7ac74f] text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
                >
                  Server code
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
