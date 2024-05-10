import React from "react";
import { workShow } from "../../constants/work";
import Brands from "./BrandSlider";
import Testimonials from "./Testimonials";
const Clients = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full py-24 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 font-Barlow">
          Client's Work
        </h1>
        <div className="flex items-center flex-wrap justify-center max-w-screen-lg gap-10 ">
          {workShow.map(({ id, src, type }) => (
            <div key={id}>
              {type === "video/mp4" ? (
                <video
                  className="w-64 h-64 lg:w-96 lg:h-96 rounded-xl shadow-md shadow-gray-400 duration-200 hover:scale-105"
                  autoPlay
                  loop
                  muted
                  src={src}
                  preload="metadata"
                ></video>
              ) : (
                <img
                  className="w-72 h-auto lg:w-96 lg:h-auto rounded-xl shadow-md shadow-gray-400 duration-200 hover:scale-105"
                  loading="eager"
                  src={src}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Brands/>
      <Testimonials/>
    </>
  );
};

export default Clients