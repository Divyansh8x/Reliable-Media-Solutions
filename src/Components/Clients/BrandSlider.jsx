import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arvind from "../../assets/BrandLogo/Logo 7.png";
import Bean from "../../assets/BrandLogo/Logo 4.png";
import HOA from "../../assets/BrandLogo/Logo 6.png";
import Hohma from "../../assets/BrandLogo/Logo 5.png";
import Igf from "../../assets/BrandLogo/Logo 8.png";
import MrBrowns from "../../assets/BrandLogo/Logo 3.png";
import QuickFixs from "../../assets/BrandLogo/Logo 9.png";
import Studiohohmas from "../../assets/BrandLogo/Logo 1.png";
import Uv from "../../assets/BrandLogo/Logo 2.png";

export default function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
    cssEase: "linear",
    pauseOnHover: false, // Disable pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          variableWidth: true,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <h1 className="text-center text-2xl md:text-3xl lg:text-[42px] font-bold md:pb-4 tracking-wide font-Barlow mx-0.5">
        Our Top Projects
      </h1>
      <div className="lg:ml-52 lg:mr-52 -mb-3"> 
        <Slider {...settings}>
          <img
            src={Studiohohmas}
            alt="Studiohohmas"
            style={{ width: "150px" }}
          />
          <img src={Uv} alt="Uv" style={{ width: "150px" }} />
          <img src={MrBrowns} alt="MrBrowns" style={{ width: "150px" }} />
          <img src={Bean} alt="Bean" style={{ width: "150px" }} />
          <img src={Hohma} alt="Hohma" style={{ width: "150px" }} />
          <img src={HOA} alt="HOA" style={{ width: "150px" }} />
          <img src={Arvind} alt="Arvind" style={{ width: "150px" }} />
          <img src={Igf} alt="Igf" style={{ width: "150px" }} />
          <img src={QuickFixs} alt="QuickFixs" style={{ width: "150px" }} />
        </Slider>
      </div>
    </div>
  );
}
