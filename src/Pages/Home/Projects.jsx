import React from "react";

const Projects = () => {
  return (
    <div>
      <div id="projects" className=" mt-10 ml-10 ">
        <h1 className="text-4xl font-semibold ">Projects</h1>
        <p className="text-lg">Here is some of my projects</p>

        <div className="lg:flex  mx-auto">
          <div className="p-5 mx-auto sm:p-10 md:p-16 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src="https://i.ibb.co/mC5QfqQ/Screenshot-3.png"
                alt=""
                className="w-full h-60 sm:h-96 "
              />
              <div className="p-4 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-600 w-[250px] h-[320px]">
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href="#img"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                  >
                    <span className="text-slate-900">CarSome</span> <br />
                    <span>Recycled car resale new site</span>
                  </a>
                  <p className="text-xs dark:text-gray-400">
                    By 
                    <a
                      rel="noopener noreferrer"
                      href="#author"
                      className="text-xs hover:underline"
                    >
                       Delower Hossain
                    </a>
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <a type="btn  btn-ghost" target='_blank' 
                  rel="noreferrer"
                  href="https://carsome-f3da0.web.app/">View Live site</a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 mx-auto sm:p-10 md:p-16 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src="https://i.ibb.co/qB35f1F/Screenshot-1.png"
                alt=""
                className="w-full h-60 sm:h-96 "
              />
              <div className="p-4 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md  dark:bg-gray-600 w-[250px] h-[320px]">
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href="#img"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                  >
                    <span className="text-slate-900">Tech BD</span> <br />
                    <span>Buying products info and giving reviews  </span>
                  </a>
                  <p className="text-xs dark:text-gray-400">
                    By 
                    <a
                      rel="noopener noreferrer"
                      href="#author"
                      className="text-xs hover:underline"
                    >
                       Delower Hossain
                    </a>
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <a type="btn  btn-ghost" target='_blank' 
                  rel="noreferrer"
                  href="https://dream-vally.web.app/">View Live site</a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 mx-auto sm:p-10 md:p-16 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src="https://i.ibb.co/7bzg3XD/Screenshot-4.png"
                alt=""
                className="w-full h-60 sm:h-96 "
              />
              <div className="p-4 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-600 w-[250px] h-[320px]">
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href="#img"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                  >
                    <span className="text-slate-900">E-learning</span> <br />
                    <span>A client can get the courses and download their </span>
                  </a>
                  <p className="text-xs dark:text-gray-400">
                    By 
                    <a
                      rel="noopener noreferrer"
                      href="#author"
                      className="text-xs hover:underline"
                    >
                       Delower Hossain
                    </a>
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <a type="btn  btn-ghost" target='_blank' 
                  rel="noreferrer"
                  href="https://e-learning-11264.web.app/">View Live site</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
