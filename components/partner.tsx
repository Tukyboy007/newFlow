import React from "react";
import Image from "next/image";

interface PartnerProps {
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  img: string;
  title: string;
  partners: PartnerProps[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  title,
  partners,
  img,
}) => {
  return (
    <div
      className="bg-cover bg-center text-center z-40  min-h-[70vh] flex justify-center items-center relative flex-col"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className="absolute top-0 w-full h-[18%] bg-gradient-to-t from-transparent to-white z-10"></div>

      <div className="mb-12 pt-10 z-20">
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
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={250}
                  height={250}
                />
              </div>
              <h3 className="text-lg font-bold text-[#5D3587]">
                {partner.name}
              </h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
