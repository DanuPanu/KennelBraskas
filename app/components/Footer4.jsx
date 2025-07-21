"use client";

import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export function Footer4() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-pink flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <Link href="#relume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('relume');
                }}>
            <Image
              src="/Logo black.png"
              alt="Logo image"
              width={100}
              height={100}
              className="inline-block"
            />
          </Link>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <Link 
                href="#ajankohtaista"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('ajankohtaista');
                }}
              >
                Ajankohtaista
              </Link>
            </li>
            <li className="font-semibold">
              <Link 
                href="#meista"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('meista');
                }}
              >
                Meistä
              </Link>
            </li>
            <li className="font-semibold">
              <Link 
                href="#rodusta"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('rodusta');
                }}
              >
                Rodusta
              </Link>
            </li>
            <li className="font-semibold">
              <Link 
                href="#koiramme"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('koiramme');
                }}
              >
                Meidän koiramme
              </Link>
            </li>
            <li className="font-semibold">
              <Link 
                href="#pentu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pentu');
                }}
              >
                Pentu meiltä
              </Link>
            </li>
            <li className="font-semibold">
              <Link 
                href="#yhteystiedot"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('yhteystiedot');
                }}
              >
                Yhteystiedot
              </Link>
            </li>
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            <Link href="#" aria-label="Facebook">
              <BiLogoFacebookCircle className="size-6" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <BiLogoInstagram className="size-6" />
            </Link>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 pb-4 text-sm md:flex-row md:gap-x-6 md:pt-8 md:pb-0">
          <div className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
