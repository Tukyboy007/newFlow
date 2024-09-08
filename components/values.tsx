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
    cards: Card[]
}

const CardWithIcon: React.FC<CardWithIconProps> = ({ title, icon }) => {
    return (
        <div className="flex flex-col items-center  font-bold text-[#1E1E1E] h-[256px]">
            <div className="w-[128px] h-[128px] rounded-full bg-[#F5D5AE] shadow-2xl flex items-center justify-center" style={{ boxShadow: "0px 4px 10px rgba(239, 154, 83, 1)" }}>
                <img src={icon} alt={title} className="mx-auto w-20 h-20" />
            </div>
            <div className="flex items-center justify-center mt-4 w-[256px] h-[64px]">
                <h6 className="text-2xl w-[256px] text-center">{title}</h6>
            </div>
        </div >
    );
};

const Card: React.FC<Card> = ({ text, img }) => {
    return (
        <div className="flex flex-col items-center  font-bold text-[#1E1E1E] h-[500px]">
            <div className="w-[400px] h-[500px] rounded- bg-zinc-100 shadow-2xl grid grid-rows-3 gap-4 pt-12 ">
                <img src={img} alt={text} className="mx-auto w-64 h-64 row-span-2" />
                <div className="border border-b-[#A990BB] border-b-[6px]  p-4 text-center bg-[#392467] text-white row-span-1 flex items-center justify-center w-full">{text}</div>
            </div>

        </div >
    );
};

const Values: React.FC<PropsPageProps> = ({ cardData, title, cards }) => {
    return (
        <div className="flex flex-col p-16 bg-gradient-to-b from-white to-[#E6D2F5] bg-opacity-20">
            <div className="text-[60px] font-bold text-[#392467] text-center mb-[72px]">{title}</div>
            <div className="min-h-[40vh] flex flex-col md:flex-row justify-center gap-4 p-4">
                {cardData.map((card, index) => (
                    <CardWithIcon
                        key={index}
                        title={card.title}
                        icon={card.icon}
                    />
                ))}
            </div>
            <div className="min-h-[60vh] flex flex-col md:flex-row justify-center items-center gap-16 p-4 relative">
                <div className="min-h-[60vh] flex flex-col md:flex-row justify-center items-center gap-16 p-4 absolute top-0 z-10">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            img={card.img}
                            text={card.text}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
};


export default Values;
