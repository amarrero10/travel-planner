import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logo.png";
import { ReactComponent as Journey } from "../assets/journey.svg";

function Landing() {
  return (
    <div>
      <div className=" max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1 mx-auto mt-10">
        <div className="flex-1 bg-white text-center hidden md:flex sm:rounded-l-lg">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat ">
            <Journey />
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 flex flex-col h-full justify-between">
          <div className="text-justify">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-steelblue text-center">
              Plan Your Dream Adventure and Relive Every Moment
            </h1>
            <p className="text-[12px] sm:text-lg text-rose sm:mt-20 mt-10">
              Discover the ultimate travel companion with [App Name]. Whether you're planning your
              next getaway or reminiscing about past adventures, our website lets you create
              detailed itineraries, upload photos, and cherish your travel memories all in one
              place. Start your journey with us and make every trip unforgettable.
            </p>
          </div>
          <div>
            <Link to="/login">
              <button className="flex mt-10 sm:mt-20 w-full justify-center rounded-md bg-skyblue px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-steelblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steelblue">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
