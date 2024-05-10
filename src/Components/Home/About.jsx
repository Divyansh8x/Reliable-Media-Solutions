import Lottie from "react-lottie";
import AnimatedData from "../../assets/Animation Services/Animation-aboutus.json";
import { useMemo } from "react";

const About = () => {
  const memoAnimatedData = useMemo(() => AnimatedData, []);

  const defaultOptions = {
    mode: "scroll",
    animationData: memoAnimatedData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:justify-center w-full mx-auto overflow-hidden lg:my-10"
    >
      <div className="flex flex-col max-w-screen-lg lg:justify-center lg:w-1/2">
        <div>
          <h1 className="text-3xl text-black font-Barlow font-bold md:text-4xl lg:text-5xl tracking-wide px-3 pb-3 pt-5 ">
            About Us
          </h1>
        </div>

        <div className="font-normal font-Barlow lg:text-xl text-base md:text-lg px-3.5 text-black ">
          <p>
          • RMS is a multi-disciplinary and a forward-thinking social media firm
            specializing in elevating online presence and brand reputation for
            businesses, particularly within the restaurant and food industry.
          </p>
          <br />
          <p>
          • Our team comprises seasoned professionals including social media
            experts, personal branding consultants, content creators, and
            influencer marketing specialists.
          </p>
          <br />
          <p>
          • With a deep passion for creativity and innovation, we strive to
            deliver tailored strategies and impactful campaigns that resonate
            with target audiences.
          </p>
          <br />
          <p>
          • Committed to staying ahead of industry trends, we continuously adapt
            and evolve our approach to ensure optimal results for our clients.
          </p>
          <br />
          <p>
          • Our mission is to empower businesses to connect authentically with
            their audience, foster engagement, and drive sustainable growth
            through strategic social media management and marketing solutions.
          </p>
        </div>
      </div>
      <div className="hidden lg:block ">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default About;
