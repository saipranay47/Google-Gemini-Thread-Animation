import React, { useRef, useEffect } from "react";
import bgimg from "../assets/StartBuilding_001_BG.png";
import animationData from "../assets/StartBuilding_001.json";
import { Player } from "@lottiefiles/react-lottie-player";

const ThreadAnimation = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    let isScrolling;
    let lastScrollTop = 0;

    const handleScrollStart = () => {
      lottieRef.current.play();
    };

    const handleScrollEnd = () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        lottieRef.current.pause();
      }, 150);
    };

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const speed = Math.abs(st - lastScrollTop);
      const animationSpeed = (speed / 200) * 6.66;

      const direction = st > lastScrollTop ? 1 : -1;

      lottieRef.current.setPlayerSpeed(animationSpeed);
      lottieRef.current.setPlayerDirection(direction);

      lastScrollTop = st;
    };

    window.addEventListener("scroll", handleScrollStart);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScrollStart);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);

  return (
    <div className="relative block w-full h-[600vh]">
      <div className="flex justify-center items-center font-gsd h-screen sticky top-0 left-0 w-full">
        <div className=" absolute inset-0 w-full h-screen overflow-hidden mt-[140px] sm:mt-[90px] md:mt-[108px]">
          <div className="w-calc-100plus300 md:w-full max-w-[initial] h-auto ">
            <Player
              ref={lottieRef}
              src={animationData}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translate3d(0,-50%,0)",
              }}
              speed={1}
              loop
            ></Player>
            <img
              src={bgimg}
              alt="Line background"
              loading="lazy"
              height="500"
              className="absolute top-1/2 left-0 -translate-y-1/2 w-full"
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
