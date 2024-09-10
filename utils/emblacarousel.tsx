import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface Slide {
  imgSrc: string;
  name: string;
}

interface EmblaCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  slides,
  autoPlayInterval = 3000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(autoplay);
  }, [emblaApi, autoPlayInterval]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide w-full h-full">
              <div
                className=" w-[250px] h-[300px] bg-white border-b-8 border-[#5D3587] px-4 rounded-lg flex items-center justify-center flex-col shadow-md"
                key={index}
              >
                <Image
                  src={slide.imgSrc}
                  alt={slide.name}
                  width={200}
                  height={100}
                  objectFit="contain"
                  className="h-full w-full"
                />
              </div>
              <h3 className="text-center text-lg font-bold text-[#5D3587] mt-4">
                {slide.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
