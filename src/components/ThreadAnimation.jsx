import React from "react";
import bgimg from "../assets/StartBuilding_001_BG.png";
import animationData from "../assets/StartBuilding_001.json";
import Lottie from "lottie-react";

const ThreadAnimation = () => {
  return (
    <div className="relative block w-full h-[300vh]">
      <div className="flex justify-center items-center font-gsd h-screen sticky top-0 left-0 w-full">
        <div className=" absolute inset-0 w-full h-screen overflow-hidden mt-[140px] sm:mt-[90px] md:mt-[108px]">
          <div className="w-calc-100plus300 md:w-full max-w-[initial] h-auto ">
            <Lottie animationData={animationData} loop={true} style={{position : "absolute", top:"50%", transform:"translate3d(0,-50%,0)"}}  />
            <img
              src={bgimg}
              alt="Line background"
              loading="lazy"
              width="1500"
              height="500"
              className="absolute top-1/2 md:left-0 -left-[150px] -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex flex-col relative items-center justify-center gap-14 z-10 px-6">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-dynamic leading-[107%] px-8">
              Build with Gemini
            </h1>
            <p className="text-[#929DAB] text-xl leading-[120%] max-w-[640px] md:max-w-[705px] px-9">
              Integrate Gemini models into your applications with Google AI
              Studio and Google Cloud Vertex AI. Available December 13th.
            </p>
          </div>
          <a
            href="#"
            className=" bg-[#f8f9fa] text-black relative text-lg h-[51px] mx-auto self-center flex justify-center items-center px-[30px] rounded-full"
          >
            <span>Coming soon</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThreadAnimation;
