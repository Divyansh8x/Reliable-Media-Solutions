import React from "react";
import { Link } from "react-router-dom";
import logoMain from "../assets/Img/Logo-main.png";
import XIcon from "../assets/Icons/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-white border-y border-y-slate-400 mt-10">
      <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-2 md:mb-0 flex items-center">
            <img src={logoMain} className="w-36 md:w-52" alt="Logo" />
          </div>
          <div className="grid grid-cols-2 gap-10 md:gap-20 mt-5">
            <div>
              <h2 className="mb-4 text-md font-bold text-gray-900 uppercase font-Raleway tracking-wide">
                Resources
              </h2>
              <ul className=" text-gray-600 font-semibold font-Raleway">
                <li className="mb-3">
                  <Link to="/" target="_parent" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/services"
                    target="_parent"
                    className="hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/clients"
                    target="_parent"
                    className="hover:underline"
                  >
                    Clients
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/career"
                    target="_parent"
                    className="hover:underline"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-md font-bold text-gray-900 uppercase font-Raleway">
                Follow us
              </h2>
              <ul className="text-gray-600 font-semibold font-Raleway">
                <li className="mb-3">
                  <Link
                    to="https://www.instagram.com/reliablemediasolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="https://www.linkedin.com/company/reliablemediasolutions.in/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="https://x.com/ReliableMediaIn?t=GLa1USXaFJbbGenegrVs2Q&s=09"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="https://wa.me/7017328392"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="flex justify-center items-center text-black ">
          <div className=" text-md text-black text-center font-Barlow tracking-wide">
            <div>© 2024 reliablemediasolutions. </div>
            <div>All Rights Reserved</div>
            <div>
              Developed by{" "}
              <Link
                className="hover:underline  text-black  cursor-pointer"
                target="_blank"
                rel="noreferrer"
                to="https://portfolio-snippet.netlify.app/"
              >
                <span>Divyansh </span>
              </Link>{" "}
              {" | "}
              <Link
                className="hover:underline text-black cursor-pointer"
                target="_blank"
                rel="noreferrer"
                to="https://x.com/Divyansh1525?t=4wZOhv1Th13Gz2Qq7Ip5ig&s=09"
              >
                <span>
                  Twitter
                  <img
                    className="w-4 h-4 inline ml-1"
                    src={XIcon}
                    alt="TwitterIcon"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
