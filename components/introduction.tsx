import React from "react";
import Image from "next/image";

interface IntroductionProps {
  title: string;
  text1: string;
  text2: string;
}

const Introduction: React.FC<IntroductionProps> = ({ title, text1, text2 }) => {
  return (
    <div className="min-h-[50vh] flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-4">
      <div>
        <Image alt="logo" src="/assets/logo2.svg" width={300} height={105} />
      </div>
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#392467]">
          {title}
        </h1>
        <div className="text-[#000000] w-full md:w-[500px]">{text1}</div>
        <div className="text-[#000000] font-bold w-full md:w-[500px]">
          {text2}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
