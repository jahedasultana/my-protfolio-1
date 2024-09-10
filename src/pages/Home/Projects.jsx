import img1 from '../../assets/Fitness-Tracker.png';
import img2 from '../../assets/Foods-Project-Home.png';
import img3 from '../../assets/Real-Estate-Home.png';
const Projects = () => {
  return (
    <div id='project' className='my-10'>
        <p className='text-[#8d918b] text-lg font-semibold text-center'>Browse My Recent</p>
        <h1 className="text-5xl text-center font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-3 gap-4">
    
        <div className="border-2 shadow-xl rounded-md w-full bg-white">
          <figure>
            <img
              src={img1}
              className="w-full h-[350px] object-cover object-top rounded-t-md"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-2xl font-bold">Fitness Tracker</h3>
            <p className="text-[#8d918b] mt-1 mb-1">FitnessTracker is a comprehensive fitness management platform designed to empower individuals to achieve their health.</p>
            <p className="text-[#8d918b] mt-1 mb-1">
              <span className="font-bold">Technologies:</span> react-router-dom, JWT for authentication, React-simple-typewriter
            </p>
          

            <div className="flex gap-3 mt-3 md:gap-4 flex-wrap">
              <a
                href='https://jade-gingersnap-ed17f2.netlify.app'
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Live site
              </a>
              <a
                href='https://github.com/jahedasultana/pha12-fitness-tracker-client'
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Source code
              </a>
              { (
                <a
                  href='https://github.com/jahedasultana/pha12-fitness-tracker-server'
                  target="_blank"
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
                >
                  Server code
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-2 shadow-xl rounded-md w-full bg-white">
          <figure>
            <img
              src={img2}
              className="w-full h-[350px] object-cover object-top rounded-t-md"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-2xl font-bold">Food-donate</h3>
            <p className="text-[#8d918b] mt-1 mb-1">We are developing a Community Food Sharing and Surplus Reduction Platform where users can share surplus food items with others in need</p>
            <p className="text-[#8d918b] mt-1 mb-1">
              <span className="font-bold">Technologies:</span> react-router-dom, JWT for authentication, React-simple-typewriter
            </p>
          

            <div className="flex gap-3 mt-3 md:gap-4 flex-wrap">
              <a
                href='https://food-projects-9d8e7.web.app'
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Live site
              </a>
              <a
                href='https://github.com/jahedasultana/pha11-food-donator-client'
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Source code
              </a>
              { (
                <a
                  href='https://github.com/jahedasultana/pha11-food-donator-server'
                  target="_blank"
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
                >
                  Server code
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-2 shadow-xl rounded-md w-full bg-white">
          <figure>
            <img
              src={img3}
              className="w-full h-[350px] object-cover object-top rounded-t-md"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-2xl font-bold">Tourists</h3>
            <p className="text-[#8d918b] mt-1 mb-1">Explore Southeast Asia is a tourism management website focusing on the diverse and vibrant tourist destinations within Southeast Asia.</p>
            <p className="text-[#8d918b] mt-1 mb-1">
              <span className="font-bold">Technologies:</span> react-router-dom, JWT for authentication, React-simple-typewriter
            </p>
          

            <div className="flex gap-3 mt-3 md:gap-4 flex-wrap">
              <a
                href='https://tourist-website-e895b.web.app'
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Live site
              </a>
              <a
                href='https://github.com/jahedasultana/pha11-food-donator-client'
                target="_blank"
                className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
              >
                Source code
              </a>
              { (
                <a
                  href='https://github.com/jahedasultana/pha10-tourist-server'
                  target="_blank"
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base bg-slate-600 text-white rounded-md hover:underline hover:-translate-y-0.5 hover:cursor-pointer"
                >
                  Server code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
