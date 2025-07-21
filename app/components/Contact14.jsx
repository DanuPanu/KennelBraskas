"use client";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { useCookieConsent } from "@/app/context/CookieConsentContext";

export function Contact14() {
  const { consent } = useCookieConsent();
  const showMap = consent === "accepted";

  return (
    <section
      id="yhteystiedot"
      className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center"
    >
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
          {/* Yhteystiedot */}
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold md:text-xl">Sähköposti</h3>
              <p className="mb-2">Ota meihin yhteyttä</p>
              <a className="underline" href="mailto:hello@relume.io">
                hello@relume.io
              </a>
            </div>

            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold md:text-xl">Puhelin</h3>
              <p className="mb-2">Soita meille</p>
              <a className="underline" href="tel:+15550000000">
                +1 (555) 000-0000
              </a>
            </div>

            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold md:text-xl">Sijainti</h3>
              <p className="mb-2">123 Sample St, Sydney NSW 2000 AU</p>
            </div>
          </div>

          {/* Kartta tai placeholder */}
          <div className="relative size-full h-[400px] md:h-[516px] rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
            <iframe
              title="Kartta"
              src="https://www.google.com/maps/embed?pb=..." // Vaihda oikeaan
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full rounded border-none"
              style={{ pointerEvents: showMap ? 'auto' : 'none', filter: !showMap ? 'blur(6px) grayscale(0.3)' : 'none', transition: 'filter 0.3s' }}
            />
            {!showMap && (
              <>
                <div className="absolute inset-0 w-full h-full bg-opacity-20 backdrop-blur-md rounded z-10" />
                <span className="relative z-20 text-gray-600 text-center px-4 text-lg font-medium">
                  Kartta on piilotettu, koska et ole hyväksynyt evästeitä.
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
