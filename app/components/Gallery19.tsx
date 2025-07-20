"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function Gallery19() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Array of dog images from your public folder
  const dogImages = [
    {
      src: "/Alwa 1.jpg",
      alt: "Alwa - Australian Labradoodle",
      name: "Alwa"
    },
    {
      src: "/Alli 2.jpg", 
      alt: "Alli - Australian Labradoodle",
      name: "Alli"
    },
    {
      src: "/Aku 2.jpg",
      alt: "Aku - Australian Labradoodle", 
      name: "Aku"
    },
    {
      src: "/i284571214519171223.jpg",
      alt: "Australian Labradoodle",
      name: "Koiran kuva 4"
    },
    {
      src: "/i284571214516632345.jpg",
      alt: "Australian Labradoodle",
      name: "Koiran kuva 5"
    },
    {
      src: "/i284571214514253415.jpg",
      alt: "Australian Labradoodle",
      name: "Koiran kuva 6"
    },
    {
      src: "/image_50399489.jpg",
      alt: "Australian Labradoodle",
      name: "Koiran kuva 7"
    }
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index: number) => {
    return cn(
      "relative mx-[3px] inline-block size-2 rounded-full border border-black",
      {
        "bg-black": current === index + 1,
        "bg-transparent": current !== index + 1,
      }
    );
  };

  return (
    <section id="koiramme" className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Meidän koiriamme
          </h2>
          <p className="md:text-md">Kuvia ja tietoa meidän koiristamme</p>
        </div>
        
        <div className="relative mx-auto max-w-7xl">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {dogImages.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <div className="relative aspect-square overflow-hidden rounded-image">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="rounded object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        quality={100}
                      />
                    </div>
                    <p className="mt-3 text-center text-sm font-medium text-gray-700 md:text-base">
                      {image.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex md:size-12 lg:size-14" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex md:size-12 lg:size-14" />
          </Carousel>
        </div>
        
        <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
          {dogImages.map((_, index) => (
            <button
              key={index}
              onClick={handleDotClick(index)}
              className={dotClassName(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
