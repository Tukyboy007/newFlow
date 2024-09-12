import React from "react";

interface CardWithIconProps {
    title: string;
    icon?: string; // Optional icon URL
}

interface Card {
    text: string;
    img?: string; // Optional icon URL
}

interface PropsPageProps {
    title: string;
    cardData: CardWithIconProps[]; // Array of cards passed as props
    cards: Card[];
}

const CardWithIcon: React.FC<CardWithIconProps> = ({ title, icon }) => {
    return (
        <div className="flex flex-col items-center  font-bold text-[#1E1E1E] h-[256px]">
            <div
                className="w-[128px] h-[128px] rounded-full bg-[#F5D5AE] shadow-2xl flex items-center justify-center"
                style={{ boxShadow: "0px 4px 10px rgba(239, 154, 83, 1)" }}
            >
                <img src={icon} alt={title} className="mx-auto w-20 h-20" />
            </div>
            <div className="flex items-center justify-center mt-4 w-[256px] h-[50px]">
                <h6 className="text-2xl w-[256px] text-center">{title}</h6>
            </div>
        </div>
    );
};

const Card: React.FC<Card> = ({ text, img }) => {
    return (
        <div className="flex flex-col items-center overflow-hidden font-bold text-[#1E1E1E] mx-10 shadow-2xl shadow-[#392467] pt-2">
            <div className="w-[280px] shadow-2xl bg-[#ffffff]">
                <div className="w-full h-w-full p-10">
                    <img src={img} alt={text} className="" />
                </div>
                <div className="border border-b-[#A990BB] border-b-[6px] h-25 p-4  text-center bg-[#392467] text-white row-span-1 flex items-center justify-center w-full">
                    {text}
                </div>
            </div>
        </div>
    );
};

const Values: React.FC<PropsPageProps> = ({ cardData, title, cards }) => {
    return (
        <div className="min-h-[80vh] items-center flex flex-col justify-center relative z-10  mt-10 pb-20 overflow-hidden gap-10 p-4">
            <h1 className="text-[34px] font-roboto pb-5 font-bold tracking-tighter text-black">
                {title}
            </h1>
            <div className="min-h-[20vh] flex flex-col md:flex-row justify-center gap-4 -pt-10">
                {cardData.map((card, index) => (
                    <CardWithIcon key={index} title={card.title} icon={card.icon} />
                ))}
            </div>
            <div className="flex justify-center items-center gap-10 z-20 md:flex-row flex-col">
                {cards.map((card, index) => (
                    <Card key={index} img={card.img} text={card.text} />
                ))}
            </div>
            <div className="absolute bottom-0 w-[100vh] h-[60vh] translate-y-[30%]  border-[#392467] border-t-2 rounded-t-full z-10 border-opacity-50"></div>
        </div>
    );
};

export default Values;
