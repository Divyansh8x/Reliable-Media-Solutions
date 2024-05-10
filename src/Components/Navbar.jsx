import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import logoMain from "../assets/Img/Logo-main.png";
import { NavLink } from "react-router-dom";
import HeadImage from "../assets/Img/header.jpg";
import links from "../constants/Links.js";

const Navbar = () => {
  const navImage = {
    backgroundImage: `url(${HeadImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="h-fit">
        <div
          style={navImage}
          className="z-50 fixed top-0 flex md:flex-row font-Barlow justify-between py-2 px-3.5 w-full 2xl:px-52 "
        >
          <div className="w-36 lg:w-52 ">
            <img src={logoMain} alt="" />
          </div>

          <div className="md:flex items-center h-fit hidden">
            <ul className="flex items-center py-3">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-2 capitalize font-medium lg:text-xl text-xl text-black"
                >
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer px-3  ${
                        isActive
                          ? "font-bold underline hover:text-black"
                          : "hover:text-black"
                      }`
                    }
                    to={link}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-10 text-black md:hidden  "
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <div className="md:hidden absolute top-0 left-0 w-full h-fit bg-white text-black mt-16 ">
              <ul className="flex flex-col font-medium">
                {links.map(({ id, link }) => (
                  <NavLink
                    key={id}
                    to={link}
                    onClick={() => setNav(!nav)}
                    className={({ isActive }) =>
                      ` cursor-pointer px-4 capitalize py-2.5 text-xl  ${
                        isActive
                          ? "font-bold underline"
                          : "hover:bg-gray-300 hover:text-blue-900"
                      }`
                    }
                  >
                    <li>{link}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
