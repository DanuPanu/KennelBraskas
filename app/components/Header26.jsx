import React from "react";
import Image from "next/image";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-light-pink w-screen flex flex-col items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Kennel Braskas
              </h1>
              <p className="md:text-md">
                Kasvatamme rodunmukaisia, ihanan pörröisiä ja ihmisrakkaita
                australianlabradoodleja. Kuulumme maailmanlaajuiseen
                rotujärjestöön WALAan. Pyrimme kasvattamaan pennut
                vastuullisesti maalaisjärjellä, pieni pilke silmäkulmassa.
                Koirien kasvattajana toimiminen on hauskaa ja se pitää myös
                näkyä.
              </p>
            </div>
          </div>
          <div>
            <Image
              priority
              src="/jessica-d-vega-TJV3QIO7r4M-unsplash.jpg"
              className="size-full rounded object-cover"
              alt="Relume placeholder image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
