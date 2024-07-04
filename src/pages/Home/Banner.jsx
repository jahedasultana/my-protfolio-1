const Banner = () => {
  return (
    <section className=" dark:text-gray-800">
      <div className="max-w-screen-lg flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="">
          <img
            src="https://i.postimg.cc/x1t2HJ3P/Whats-App-Image-2023-12-28-at-10-35-49-32252c73.jpg"
            alt=""
            className="object-cover rounded-full size-72 border-4 p-2 border-[#8d918b] md:size-96"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg space-y-3">
          <h3 className="text-xl font-semibold text-[#8d918b]">Hello, I'm</h3>
          <h1 className="text-5xl font-bold">Jaheda Sultana</h1>
          <h1 className="text-3xl text-[#8d918b] font-bold">
            Frontend Developer
          </h1>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="btn btn-outline border-[#596475] font-medium rounded-full hover:bg-[#596475]">Download CV</button>
            <button className="btn text-white font-medium hover:bg-[#140f2d] bg-[#596475] rounded-full py-2">
              Contact Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
