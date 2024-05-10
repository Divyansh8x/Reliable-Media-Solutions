import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ type, src }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="  bg-white rounded-lg overflow-hidden shadow-md">
      {type === "video/mp4" ? (
        <video
          className={`w-64 h-80 lg:w-96 lg:h-96 object-cover ${
            loading ? "bg-gray-200" : ""
          }`}
          autoPlay
          loop
          muted
          src={src}
          preload="metadata"
        ></video>
      ) : (
        <img
          className={`w-72 h-96 lg:w-96 lg:h-96 object-cover ${
            loading ? "bg-gray-200" : ""
          }`}
          loading="lazy"
          src={src}
          alt=""
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(["video/mp4", "image/jpeg", "image/png"]).isRequired,
  src: PropTypes.string.isRequired,
};

export default Card;
