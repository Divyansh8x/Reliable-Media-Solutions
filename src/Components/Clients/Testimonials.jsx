import React from "react";
import Logo from "../../assets/Testimonals/logo.png";
import testimonials from "../../constants/Testimonials.js";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:mt-20">
      <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold tracking-normal my-10 lg:my-20 font-Barlow">
          Client Testimonials
        </h1>
      </div>
      <div className={`flex flex-wrap justify-center mt-10`}>
        {testimonials.map((item, i) => (
          <div
            className={`w-full lg:w-1/3 sm:w-1/2 px-4 py-2 flex-grow transition ease-in-out hover:scale-105 duration-300 font-Raleway relative`} 
            key={i}
          >
            <img
              className="absolute top-1 right-7 z-10 "
              src={Logo}
              width="60px" 
              alt=""
            />
            <div
              className={`bg-white rounded-md p-6 text-md border  border-neutral-800 font-normal h-full flex flex-col justify-between `}
            >
              <p className="mt-7">{item.text}</p>
              <div className="flex justify-center items-center mt-8">
                <img
                  className="w-28 h-28 mr-6 rounded-full border border-neutral-300"
                  src={item.image}
                  alt=""
                />
                <div>
                  <h6 className="pb-1">{item.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
