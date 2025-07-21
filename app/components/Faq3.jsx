import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export function Faq3() {
  return (
    <section id="pentu" className="px-[5%] py-16 md:py-24 lg:py-28 bg-pink flex flex-col items-center justify-center">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
            Pentu meiltä
          </h2>
          <p className="md:text-md">
            Jos olette päättäneet että teidän elämässä olisi ald:lle paikka,
            ottakaa yhteyttä ja kerro mahdollisimman paljon
            itsestänne/perheestänne. Huomaa jo tässä vaiheessa että kysyntää on
            ja jonot saattavat olla pitkät. Sovimme sitten tapaamisesta niin
            että pääsette tutustumaan meidän koiriin ja meihin. Tämän jälkeen
            kannattaa vielä tarkkaan miettiä oletteko tarpeeksi sitoutuneita
            tähän rotuun joka vaatii turkinhuoltoa, liikuntaa, ruokaa ja
            koulutusta noin 15 vuotta eteenpäin.
            <br></br><br></br>Kun asiat ovat järjestyksessä on
            aika asettua pentujonoon. Se alkaa täyttämällä pentuhakemuksen jonka
            saatte meiltä joko tapaamisen yhteydessä tai sähköpostitse. Kun
            olette täyttäneet ja palauttaneet pentuhakemuksen meille, lähetämme
            sähköpostitse laskun käsirahaa varten. Käsiraha vähennetään pennun
            kokonaishinnasta.
            <br></br><br></br>Kasvattaja pidättää itsellään oikeuden valita
            pentuperheet tapaamisten/keskustelujen perusteella ja valitsee
            perheelle sopivimman pennun oman asiantuntemuksen perusteella. Huom!
            Väri tai sukupuoli ei ole ensisijainen peruste. Toiveita voi
            esittää, mutta emme voi luvata, että pystymme toteuttamaan niitä.
            Mikäli pentu, jota teille tarjoamme, ei vastaa toiveitanne esim.
            värin tai sukupuolen osalta, varausmaksua ei palauteta eikä kauppaa
            pureta, vaan voitte jäädä odottamaan sopivaa pentua jostain
            seuraavasta pentueestamme. Ostaja on velvoitettu kertomaan
            kasvattajalle, mikäli jokin asia ostajan elämässä olennaisesti
            muuttuu pennun odotuksen aikana. Pidätämme oikeuden palauttaa
            käsirahan mikäli emme ole valmiita luovuttamaan pentua teille
            jostain syystä.
          </p>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-lg">
              Mitä pentupakettimme sisältää
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <p>Pennun ja sen hoito, kasvatus ja sosiaalistaminen luovutukseen
              asti asianmukaiset madotukset.
              <br></br><br></br>Eläinlääkärin suorittama
              terveystarkastus, mikrosirutus jostaa kirjallinen todistus
              sukutaulu ja pennun rekisteröinti Walan tietokantaan.
              <br></br><br></br>Rekisteröimme pennun myös ruokaviraston koirarekisteriin
              <br></br><br></br>Kirjallinen kauppasopimus.
              <br></br><br></br>Kahden vuoden terveystakuu geneettisten
              sairauksien varalta.
              <br></br><br></br>Pentukansio: hoito-ohjeet, turkinhoito-opas,
              liikunta ohjeet yms.
              <br></br><br></br>Pentupaketti: fleece jossa "tuttuja
              tuoksuja", leluja, nameja, kuivamuonaa ym.
              <br></br><br></br>Suomen
              australianlabradoodle ry:n jäsenyys vuodeksi, sis. turkinhoito
              opas
              <br></br><br></br>Lupaus olla pennun ja perheen tukena koko koiran eliniän.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-lg">
              Meidän pennut
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Pennut syntyvät ja kasvavat meidän kodissa, juuri siinä missä
              mekin olemme/liikumme. Meille on tärkeää että sekä omat koirat
              että sijoituskoirat saavat olla osana meidän perhettä. Ovat siis
              keskipisteessä koko ajan. Meillä on lapsia jotka kohta alkavat
              olla pahimmassa teini-iässä joten meillä riittää menoa ja
              meininkiä. Pennut saavat tottua sekä meidän lapsiin että heidän
              ystäviin. Muutenkin meillä käy paljon porukkaa joten
              sosiaalistamisessa ei pitäisi olla mitään ongelmaa. Pennut saavat
              liikkua myös ulkona. Samalla he tottuvat erilaisiin ääniin, esim
              traktoriin ja mönkijään. Saavat myös kaivaa maata ja juosta
              nurmikolla.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-lg">
              Jalostuskoiramme
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Jalostuskoiramme testataan tarkasti rotujärjestön vaatimusten
              mukaisesti:
              <br></br><br></br>- Kuvautamme Vetson Oy:lla lonkat, selkä ja kyynärät
              ja tulokset lähetetään OFA:an (Orthopedic Foundation of America)
              arvioitavaksi
              <br></br><br></br>- Polvet tutkitaan patellaluksaation varalta
              <br></br><br></br>- Silmät tutkitaan säännöllisesti
              <br></br><br></br>DNA-testit lähetetään Orivetiin.
              <br></br><br></br>Ainakin nämä testit on pakko ottaa (Orivetin paletissa kyllä
              paljon enemmän):
              <br></br><br></br>- DNA-profiili
              <br></br><br></br>- PRA/PRCD (etenevä verkkokalvon
              rappeuma): perinnöllinen silmäsairaus
              <br></br><br></br>- DM (etenevä
              selkäydinrappeuma): keski-ikäisillä ja vanhoilla koirilla
              esiintyvä perinnöllinen sairaus, joka saa koiran takaosan
              halvaantumaan
              <br></br><br></br>- EIC (rasituksen sietokyvyn aleneminen ja
              lyyhistyminen): perinnöllinen sairaus, joka aiheuttaa koirilla
              lyyhistymistä rasituksessa
              <br></br><br></br>- IC (improper coat): turkin laatuun
              liittyvä perinnöllinen poikkeavuus. Turkki saattaa jäädä lyhyeksi
              ja karvanlähtöä voi esiintyä. IC ei ole sairaus, mutta testataan
              koska kahden IC-kantajan pennuille voi tulla rotumääritelmän
              vastainen lyhyt turkki
              <br></br><br></br>- vWD (con Willebrandin verenvuototauti):
              useilla koiraroduilla esiintyvä perinnöllinen sairaus, jossa veren
              hyytyminen on puutteellista
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-lg">
              Pentujen luovutus ja hinta
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Pennut myydään sterilointi/kastrointi velvoitteella. Kasvattaja
              osallistuu leikkauskustannuksiin sopimuksessa sovituilla summilla
              Kaikki pennut myydään lemmikkinä (ei jalostusoikeus) tai
              sijoituskoirina. Pennun hinta on 3.900€ sis alv 25,5%. Luovutus
              tapahtuu kun pentu on 8 viikon iässä.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
