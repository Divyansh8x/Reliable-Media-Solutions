import React from "react";
import team from "../../constants/Team.js";
import Linkedin from "../../assets/Team/linkedin.png";
import Instagram from "../../assets/Team/instagram.png";
import Youtube from "../../assets/Team/youtube.png";
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full py-24 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 font-Barlow tracking-wide">
          Founder
        </h1>
        <div className="flex flex-wrap justify-center mt-10 mx-4 sm:mx-0">
          {team.map((item, i) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 h-full px-4 py-2 md:px-2 md:py-4 transition ease-in-out hover:scale-105 duration-300"
              key={i}
            >
              <div className="h-full bg-white rounded-md p-6 text-md border border-neutral-800 font-normal flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <img
                    className="w-52 h-52 border border-neutral-300 mb-4"
                    src={item.image}
                    alt=""
                  />

                  <div className="text-center">
                    <h6 className="pb-1 text-xl md:text-2xl font-Barlow">
                      {item.user}
                    </h6>
                    <span className="text-md md:text-lg font-Raleway font-normal italic text-neutral-600">
                      {item.company}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-2 ">
                  <Link
                    className="hover:scale-105 hover:500"
                    to="https://www.instagram.com/sankalpmsr?igsh=MXFhcnJtbDl5YXQ2MQ=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img width={30} src={Instagram} alt="Instgram" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/sankalp-mishra-b6b541290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    className="hover:scale-105 hover:500"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <img width={30} src={Linkedin} alt="Linkedin" />{" "}
                  </Link>
                  <Link
                    to="https://youtube.com/@sankalpmsr?feature=shared"
                    className="hover:scale-105 hover:500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img width={30} src={Youtube} alt="" />{" "}
                  </Link>
                </div>
                <p className="mt-4 font-Raleway text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
