import React, { useContext, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

interface buttons {
  buttons: string[];
}

const Masthead: React.FC<buttons> = ({ }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
      className="min-h-screen flex flex-col items-center justify-center top-0 z-0"
    >
      <div
        className={`flex-grow-0  transition-opacity duration-1000 z-20 w-full top-0
          ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div className="bg-[#65a30d] w-full min-h-screen absolute top-0  ">
        <div className="w-full min-h-screen absolute top-0 bg-[url('/assets/back.webp')] z-10 opacity-60 blur"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#e7be79] to-[#d6acac] opacity-50 blur-background"></div>
      <div className="p-12 font-bold gap-2 text-[#392467] text-center flex-1 flex item-center justify-center flex-col z-20">
        <h1 className="-mb-3 text-[50px] xl:text-[120px]">CARAVAN</h1>
        <h2 className="mb-3 flex flex-col gap-2 font-roboto font-light justify-center ">
          <span className=" text-[20px] mb-2 xl:text-[40px] tracking-widest">
            TMB TRADE LLC
          </span>
          <div>
            <span className="font-bold text-[20px] xl:text-[24px] rounded-[25px] -tracking-[px]">
              Silk Road to Worldwide
            </span>
          </div>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pd-10 transition-all z-10 duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}
      >
        <Image
          alt=""
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
