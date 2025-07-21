"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar2() {
  const useActive = useRelume();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-border-primary bg-pink lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/">
            <Image
              src="/Logo black.png"
              alt="Logo image"
              width={100}
              height={100}
              priority
            />
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <button
              aria-label="Toggle mobile menu"
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            href="#ajankohtaista"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('ajankohtaista');
            }}
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Ajankohtaista
          </Link>
          <Link
            href="#meista"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('meista');
            }}
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Meistä
          </Link>
          <Link
            href="#rodusta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('rodusta');
            }}
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Rodusta
          </Link>
          <Link
            href="#koiramme"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('koiramme');
            }}
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Meidän koiramme
          </Link>
          <Link
            href="#pentu"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pentu');
            }}
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Pentu meiltä
          </Link>
          <Link
            href="#yhteystiedot"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('yhteystiedot');
            }}
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Yhteystiedot
          </Link>
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          <Button
            className="px-6 py-2"
            title="Ota yhteyttä"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('yhteystiedot');
            }}
          >
            Ota yhteyttä
          </Button>
        </div>
      </div>
    </section>
  );
}
