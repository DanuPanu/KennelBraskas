import React, { Fragment } from "react";

export function Content12() {
  return (
    <section id="rodusta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-light-blue flex flex-col items-center justify-center">
      <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">Rodusta</h2>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 grid grid-cols-2 gap-6 md:mb-10 md:grid-cols-4 md:gap-8 lg:mb-12">
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Jalostettu
              </h3>
              <p>Vuodesta 1980</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Koot
              </h3>
              <p>
                Mini: säkäkorkeus 35-43 cm, paino 7-13 kg, <br></br>Medium: säkäkorkeus
                43-53 cm, paino 13-23 kg, <br></br> Standard: säkäkorkeus 53-63 cm, paino
                23-30 kg
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Värejä
              </h3>
              <p>
                Musta, valkoinen, hopea, aprikoosi, ruskea, kerma, karamelli
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Turkin laatu
              </h3>
              <p>Wool, curly fleece ja wavy fleece</p>
            </div>
          </div>
          <div className="prose">
            <Fragment>
              <p>Australianlabradoodleja on jalostettu tavoitteellisesti jo 1980-luvulta lähtien. Rodussa on viisi rotua - labradorinnoutaja, villakoira, irlanninvesispanieli, amerikancockerspanieli ja cockerspanieli. Yhdistämällä labradorinnoutajaa villakoiraan ei siis saada Australianlabradoodleja. ALD:n suosion myötä näitäkin vaihtoehtoja saattaa tulla vastaan. Tämän takia kannattaa olla tarkkana kun valitsee ALD-kasvattajaa. Aidolla australianlabradoodlella on perustajakoirista asti rakentuva sukupuu. ALD ei ole FCI hyväksytty (Kennelliitto) mutta rodulla on kuitenkin olemassa useampi rotujärjestö (ALAEU, ALAA, WALA). Itse kuulumme WALAan, johon rekisteröimme kaikki pentumme.

                  <br></br><br></br>ALD on tosi fiksu ja oppii uusia asioita tosi nopeasti. Tämän koiran kanssa voi siis harrastaa melkein mitä vaan. Vain mielikuvitus on rajana. Koska ALD oppii asioita helposti, tämä sopii hyvin ensimmäiseksi koiraksi tai lapsiperheeseen. Pitää kuitenkin muistaa että jos ei keksi koiralle tarpeeksi tekemistä, saattaa olla että koira keksii sitä itse. Sopivasti liikuntaa ja lepoa on siis paras vaihtoehto.

                  <br></br><br></br>ALD:n luonne on ystävällinen, ihmisrakas, iloinen, turvallinen, oppivainen ja sosiaalinen. ALD:ta käytetään erilaisissa tehtävissä: harrastuskoirana, opas/avustajakoirana, hypokoirana, lukukoirana. Moni käy myös tervehtimässä vanhuksia erilaisissa palvelutaloissa. Sitä arvostetaan kovasti. ALDn odotettu elinikä on 12-15 vuotta. Se on perusterve rotu, mutta samat sairaudet mahdollisia kuin alkuperäisroduissakin.</p>
            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
}
