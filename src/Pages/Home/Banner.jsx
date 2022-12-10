import React from "react";


const Banner = () => {
  return (
    <div>
      <div
      id="home"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://acuitysoftwareservices.com/assets/images/portfolio-banner.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Guys</h1>
            <p className="mb-5">
            I'm Delower Hossain. A Front End Developer with less than 1 year of experience working in different domains. Likes to take on new challenges and is always eager to learn and gain new experiences.
            </p>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1bk6_nGTv5g1wF1y8BJtzOp09NALCeUfA/view?usp=share_link"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
