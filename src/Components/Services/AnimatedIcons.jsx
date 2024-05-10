import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import SocialMedia from "../../assets/Animation Services/SocialMedia.json";
import WebDev from "../../assets/Animation Services/webdev.json";
import GraphicDesign from "../../assets/Animation Services/GraphicDesign.json";
import SocialAudits from "../../assets/Animation Services/socialmediaaudits.json";
import WhatsappMarketing from "../../assets/Animation Services/whatsapp.json";
import BrandingServices from "../../assets/Animation Services/Branding.json";
import SocialMediaAdvertising from "../../assets/Animation Services/SocialMediaAdvertising.json";
import GoogleAds from "../../assets/Animation Services/googleAds.json";
import Customer from "../../assets/Animation Services/Customer.json";
import { Head } from "../../constants/services";

const defaultOptions = [
  {
    id: 1,
    mode: "scroll",
    animationData: SocialMedia,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },

  {
    id: 2,
    mode: "scroll",
    animationData: WebDev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 3,
    mode: "scroll",
    animationData: GraphicDesign,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 4,
    mode: "scroll",
    animationData: SocialAudits,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 5,
    mode: "scroll",
    animationData: WhatsappMarketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 6,
    mode: "scroll",
    animationData: BrandingServices,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 7,
    mode: "scroll",
    animationData: SocialMediaAdvertising,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 8,
    mode: "scroll",
    animationData: GoogleAds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    id: 9,
    mode: "scroll",
    animationData: Customer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
];

function AnimatedIcons() {
  const memoDefaultOptions = useMemo(() => defaultOptions, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl ">
      {memoDefaultOptions.map(({ id, animationData }) => {
        const { head, para, style } = Head.find((item) => item.id === id);
        return (
          <div key={id} className="text-center overflow-hidden ">
            <div className="  rounded-lg p-2 duration-200 hover:scale-105 ">
              <Lottie options={{ animationData }} height={180} width={180} />
              <Link
                to="/contact us"
                className="font-Raleway text-center mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
              >
                Request Detailed Quote
              </Link>
            </div>
            <div className="text-left mt-2 ">
              <h2 className="text-xl text-center font-bold font-Barlow">
                {head}
              </h2>
              <p
                className={`text-base mt-1 px-1 font-medium text-wrap text-center font-Raleway ${style}`}
              >
                {para}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AnimatedIcons;
