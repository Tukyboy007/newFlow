import React from "react";
import Link from "next/link";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center flex-row justify-center gap-10 bg-[url('/assets/2.png')] bg-cover bg-no-repeat bg-center">
      <div className="bg-white  shadow-lg p-6 max-w-sm text-center relative border-b-[8px] border-purple-700 border-opacity-80">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8"> */}
          </div>
        </div>

        <h2 className="text-purple-700 text-2xl font-bold mt-8">Mission</h2>

        <p className="text-gray-700 mt-4">
          "Pay once, use for a long time! To act as a bridge between domestic
          and foreign companies, providing quality products and services that
          fully meet the needs of the market. Environmentally friendly,
          recyclable, and safe."
        </p>
      </div>
      <div className="bg-white  shadow-lg p-6 max-w-sm  text-center relative border-b-[8px] border-purple-700 border-opacity-80">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8"> */}
          </div>
        </div>

        <h2 className="text-purple-700 text-2xl font-bold mt-8">Mission</h2>

        <p className="text-gray-700 mt-4">
          "Pay once, use for a long time! To act as a bridge between domestic
          and foreign companies, providing quality products and services that
          fully meet the needs of the market. Environmentally friendly,
          recyclable, and safe."
        </p>
      </div>
      <div className="bg-white  shadow-lg p-6 max-w-sm text-center relative border-b-[8px] border-purple-700 border-opacity-80">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8"> */}
          </div>
        </div>

        <h2 className="text-purple-700 text-2xl font-bold mt-8">Mission</h2>

        <p className="text-gray-700 mt-4">
          "Pay once, use for a long time! To act as a bridge between domestic
          and foreign companies, providing quality products and services that
          fully meet the needs of the market. Environmentally friendly,
          recyclable, and safe."
        </p>
      </div>
    </div>
  );
};

export default Vision;
