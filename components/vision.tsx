import React from "react";

interface CardProps {
  title: string;
  text: string | string[];
  image?: string; // Optional image URL for the entire card
}

interface VisionProps {
  cardData: CardProps[];
}

const Card: React.FC<CardProps> = ({ title, text, image }) => {
  return (
    <div className="mt-4 xl:w-[496px] h-[300px] p-4 bg-white shadow-lg sm:p-6 max-w-sm text-center relative border-b-[8px] border-[#5D3587] border-opacity-80">
      {image && (
        <div className="mb-4 absolute -top-[48px] left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-[#F5D5AE] rounded-full flex items-center justify-center">
            <img src={image} alt={title} className="mx-auto w-10 h-10" />
          </div>
        </div>
      )}
      <h2 className="text-[#5D3587] text-2xl font-bold mt-8 pt-2">{title}</h2>
      {Array.isArray(text) ? (
        <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
          {text.map((item, index) => (
            <li key={index} className=" leading-6 flex items-start">
              <span className="text-[#5D3587] font-semibold mr-2">•</span>{" "}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 mt-4 ">{text}</p>
      )}
    </div>
  );
};

const Vision: React.FC<VisionProps> = ({ cardData }) => {
  return (
    <div className="mx-10 xl:pt-0 pt-10 pb-10 overflow-hidden relative mt-16 min-h-[80vh] flex flex-col md:flex-row  items-center justify-center gap-10 bg-[url('/assets/2.png')] bg-cover bg-no-repeat bg-center p-4 z-0">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          image={card.image}
        />
      ))}
      <div className="absolute bottom-0 w-full hidden xl:flex h-[20%] bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Vision;
