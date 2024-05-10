import React from "react";
import backgroundImage from "../../assets/Img/bg-image.jpg";
import PhoneImage from "../../assets/Img/phone.png";
import About from "./About";
import Counter from "./Counter";
import Contact from "./Contact";
import HomePics from "./HomePics";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div
        style={backgroundStyle}
        className="flex flex-col lg:flex-row lg:justify-center w-full mx-auto  h-fit lg:h-screen"
      >
        <div className=" flex flex-col max-w-screen-lg lg:justify-center lg:w-1/2 mt-20">
          <h1 className="text-3xl text-black font-Barlow font-bold md:text-4xl lg:text-5xl p-3 tracking-wider ">
            A multi-disciplinary <br /> social media firm
          </h1>
          <p className="font-normal font-Barlow lg:text-xl px-3.5 text-base md:text-lg   text-gray-700 ">
            RMS is a dynamic social media and digital marketing firm strictly
            focused on improving online presence and brand reputation. Our
            diverse team of experts, from social media strategists to content
            creators, is dedicated to crafting innovative campaigns that
            connects with the audience. By staying ahead of trends, we deliver
            tailored strategies for sustainable growth, we empower businesses to
            connect and engage with their target market authentically. As a
            Bonus, with our customizable packages, you only have to pay for the
            services you choose, ensuring budget-friendly solutions that meet
            your specific needs.
          </p>
        </div>
        <div className="my-auto flex justify-center items-center max-h-[500px] ">
          <img loading="eager" src={PhoneImage} width={500} alt="phoneCover" />
        </div>
      </div>
      <About />
      <HomePics/>
      <Counter />
      <Contact />
    </>
  );
};

export default Home;
