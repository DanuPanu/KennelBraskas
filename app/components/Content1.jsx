import React from "react";
import Image from "next/image";

export function Content1() {
  return (
    <section id="ajankohtaista" className="px-[5%] py-16 md:py-24 lg:py-28 bg-light-purple flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Ajankohtaista
            </h2>
            <div className="prose">
              <div>
                <p>Heinäkuussa syntyy useampi pentue. Sekä pienempiä että isompia kokoja ja myös kaikkia värejä. Pentuja vapaana. Pistäkää postia tai soittakaa.

                  <br></br><br></br>Jonotusaika on tällä hetkellä noin 1-3 kk</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/pentuja.jpg"
                className="object-cover rounded w-full"
                alt="Relume placeholder image"
                width={400}
                height={400}
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
