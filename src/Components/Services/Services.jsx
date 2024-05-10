import React from "react";
import AnimatedIcons from "./AnimatedIcons";
import Chooseus from "./ChooseUs";
const Services = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-Barlow">
          Our Services
        </h1>
        <div className="font-normal font-Barlow lg:text-xl mt-2 text-base md:text-lg px-4 text-black lg:mx-52 text-center mb-2 ">

        <p>Unlock the potential of your brand with our comprehensive range of services tailored to your needs. From strategy to execution, we have you covered. Explore our offerings and choose the services that will propel your brand forward. <br/> Welcome to a new era of brand growth with RMS</p>
        </div>
        <AnimatedIcons />
      </div>
      <Chooseus />
    </>
  );
};

export default Services;
