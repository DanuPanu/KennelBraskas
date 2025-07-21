import React from "react";
import Image from "next/image";

export function Content2() {
  return (
    <section id="meista" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Image
              src="/dorien-vleeming-X25mh0aC6vk-unsplash.jpg"
              className="w-full rounded object-cover"
              alt="Relume placeholder image"
              width={400}
              height={400}
              quality={95}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Meistä
            </h2>
            <div className="prose">
              <div>
                <p>Olemme 6-henkinen eläinrakas maanviljelijä perhe Myrskylästä Itä-Uudeltamaalta. Meillä on lypsykarjaa, lampaita sekä näitä ihania australianlabradoodleja. Pyöritämme työksemme tätä tilaa perheen ja harjoittelijoiden voimin. Asumme keskellä kauneinta maaseutua jossa paljon tilaa liikkua.

                  <br></br><br></br>Eläinten hoito ja niiden terveys on meille erittäin tärkeää. Olemme solmineet Eläinten terveydenhuoltosopimuksen Yliopistollisen eläinsairaalan (Saaren eläinklinikka) kanssa. Tämä tarkoittaa sitä että, muiden käyntien lisäksi, eläinlääkärit käyvät kerran vuodessa tarkistamassa että kaikki on niin kuin pitääkin. Ne eivät tarkista pelkästään meidän navettaa ja eläimet siinä vaan tekevät arvioinnin kaikista eläimistä ja niiden pidosta. Harvalla koirankasvattajalla on tämmöinen sopimus. Tämä on meille ylpeyden aihe ja siitä saadaan joka vuosi sitten mustaa valkoisella että kaikki on kunnossa.

                  <br></br><br></br>Syy siihen että meille on tullut ALD on se että olemme, molemmat vanhemmat, allergisia koirille. Halusimme kuitenkin allergiaystävällisen ja luotettavan koiran. Meidän nuorin lapsi oli silloin 2-vuotias ja halusimme olla varmoja että lattialla pyörivä lapsi ja koira voivat olla samassa huoneessa ilman ongelmia. Myös lasten ystävien pitää pystyä vierailemaan ilman että heidän tarvitsee pelätä koiria.

                  <br></br><br></br>Kaikki meidän jalostuskoirat eivät asu meidän luona vaan heille on etsitty hyvät sijoitusperheet joiden luona he saavat paljon huomiota ja rakkautta. Pihalla meillä on reilusti tilaa missä koirat saavat juosta ja leikkiä vapaasti. Samalla koirat saavat tottua erilaisiin ääniin, sekä lasten että erilaisten työkoneiden ääniin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
