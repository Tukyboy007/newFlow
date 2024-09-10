import React from "react";
import Image from "next/image";
import EmblaCarousel from "@/utils/emblacarousel";

// Define the type for each partner
interface PartnerProps {
  name: string;
  logo: string;
}

// Define the type for the PartnersSection props
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
  // Convert partners to slides format for EmblaCarousel
  const slides = partners.map((partner) => ({
    imgSrc: partner.logo, // The logo is the image source for each slide
    name: partner.name,
  }));

  return (
    <div
      className="bg-cover bg-center text-center z-40  min-h-[70vh] flex justify-center items-center relative flex-col"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className="absolute top-0 w-full h-[18%] bg-gradient-to-t from-transparent to-white z-10"></div>

      <div className="mb-12 pt-10 z-20">
        <div className="flex flex-col gap-4 items-center justify-center space-x-4">
          <img src={img} alt={title} width={100} height={100} />
          <h2 className="text-3xl font-bold text-[#5D3587]">{title}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center">
        <div className="bg-white rounded-xl border-b-[8px] border-[#5D3587] border-opacity-80 relative h-[10%] p-4">
          <Image alt="logo" src="/assets/logo2.svg" width={220} height={100} />
        </div>
        <div className="xl:flex hidden space-x-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center w-full flex-col">
              <div className="flex justify-center overflow-hidden mb-4 w-[300px] h-[300px] p-4 bg-white border-b-[8px] border-[#5D3587] border-opacity-80 ">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={300}
                  height={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                  className="rounded-lg"
                />
              </div>
              <div className="w-[50%] -space-y-2">
                <h3 className="text-lg font-bold text-[#5D3587]">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full xl:hidden">
          <EmblaCarousel slides={slides} autoPlayInterval={4000} />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
