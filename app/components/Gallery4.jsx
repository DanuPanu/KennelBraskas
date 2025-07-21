import React from "react";
import Image from "next/image";

export function Gallery4() {
  return (
    <section id="walalla" className="px-[5%] py-16 md:py-24 lg:py-28 bg-light-blue flex flex-col items-center justify-center">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Wala
          </h2>
          <p className="md:text-md">
            Kuulumme maailmanlaajuiseen rotujärjestöön WALA:an. Tästä pääsette
            tutustumaan Walan sääntöihin ja toimintatapoihin.
            https://www.walalabradoodles.org/ Walalla on käytössä hieno Star
            Rewards Programme. Olemme joka vuosi uusineet meidän Star Rewards
            pisteitämme ja Wala on arvioinut toimintamme korkeimmalle "all
            star"-tasolle. Olemme erittäin ylpeitä siitä ja tästä on hyvä
            jatkaa.
          </p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          
            <Image
              src="/Braskas ALD WALA logo 2023-2024.png"
              alt="Relume placeholder image 1"
              className="size-full rounded-image object-contain"
              width={1000}
              height={1000}
            />
          
          
            <Image
              src="/Braskas ALD Accredited Logo 2023-2024.png"
              alt="Relume placeholder image 2"
              className="size-full rounded-image object-contain"
              width={1000}
              height={1000}
            />
          
          
            <Image
              src="/Braskas ALD Champion Logo 2024.png"
              alt="Relume placeholder image 3"
              className="size-full rounded-image object-contain"
              width={1000}
              height={1000}
            />
          
          
            <Image
              src="/Braskas ALD All Star Logo 2024.png"
              alt="Relume placeholder image 4"
              className="size-full rounded-image object-contain"
              width={1000}
              height={1000}
            />
          
        </div>
      </div>
    </section>
  );
}
