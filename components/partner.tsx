import React from 'react';
import Image from 'next/image';

interface PartnerProps {
    name: string;
    logo: string;
}

interface PartnersSectionProps {
    img: string;
    title: string;
    partners: PartnerProps[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ title, partners, img }) => {
    return (
        <div className="bg-cover bg-center p-12 text-center" style={{ backgroundImage: "url('/assets/bg.png')" }}>
            <div className="mb-12">
                <div className="flex flex-col gap-4   items-center justify-center space-x-4">
                    <img src={img} alt={title} width={100} height={100} />
                    <h2 className="text-3xl font-bold text-[#5D3587]">{title}</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                    <>
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex justify-center mb-4 w-[300px] h-[300px] bg-white border-b-[8px] border-[#5D3587]">
                                <Image src={partner.logo} alt={partner.name} width={250} height={250} />
                            </div>
                            <h3 className="text-lg font-bold text-[#5D3587]">{partner.name}</h3>

                        </div>
                    </>

                ))}
            </div>
        </div>
    );
};

export default PartnersSection;
