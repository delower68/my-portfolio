import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
        <div className="hero-content block">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl mb-10 font-bold">Contact Me</h1>
            
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form action="https://formspree.io/f/mvoyedop" method="POST"  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Message</span>
                </label>
              <textarea name="message" className="textarea" placeholder="Type Your Message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
