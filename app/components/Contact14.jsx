import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact14() {
  return (
    <section id="yhteystiedot" className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
            Ota yhteyttä
          </h2>
          <p className="md:text-md">
            Mikäli kiinnostuit australianlabradoodlesta ota meihin yhteyttä.
            Haluamme kuulla itsestäsi ja koira suunnitelmistasi/kokemuksestasi.
            Autamme mielellämme kaikissa kysymyksissäsi.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Sähköposti
              </h3>
              <p className="mb-2">Ota meihin yhteyttä</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Puhelin
              </h3>
              <p className="mb-2">Soita meille</p>
              <a className="underline" href="#">
                +1 (555) 000-0000
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Sijainti
              </h3>
              <p className="mb-2">123 Sample St, Sydney NSW 2000 AU</p>
            </div>
          </div>
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
