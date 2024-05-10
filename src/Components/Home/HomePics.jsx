import React from "react";
import Home1 from "../../assets/Img/home1.jpg";
import Home2 from "../../assets/Img/home2.jpg";

const HomePics = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-fit mt-16 mx-2">
      <img
        src={Home1}
        loading="lazy"
        style={{ width: "408px", height: "300px", objectFit: "cover" }}
        alt=""
      />
      <img
        src={Home2}
        loading="lazy"
        style={{ width: "408px", height: "300px", objectFit: "cover" }}
        alt=""
      />
    </div>
  );
};

export default HomePics;
