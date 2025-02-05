const readlineSync = require("readline-sync");

class Henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymävuosi) {
    this.etunimi;
    this.sukunimi;
    this.kutsumanimi;
    this.syntymävuosi = new Date(syntymävuosi);
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymävuosi,
    linkki,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimi, sukunimi, kutsumanimi, syntymävuosi);
    this.linkki;
    this.omapaino;
    this.laji;
    this.saavutukset;
  }

  get linkki() {
    return this._linkki; // Getter palauttaa _linkki-attribuutin
  }

  set linkki(linkki) {
    if (!/^https?:\/\//.test(linkki)) {
      linkki = "https://" + linkki; // Lisää "https://", jos puuttuu
    }
    this._linkki = linkki; // TÄRKEÄÄ: käytetään _linkki, ei linkki!
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(omapaino) {
    this._omapaino = omapaino + " kg";
  }

  get laji() {
    return this._laji;
  }
  set laji(laji) {
    this._laji = laji;
  }

  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(saavutukset) {
    this._saavutukset = saavutukset;
  }
}

// Luodaan Urheilija-olio ilman readlineSync:iä
const urheilija = new Urheilija();
urheilija.etunimi = "Perttu";
urheilija.sukunimi = "Hyttinen";
urheilija.kutsumanimi = "Pertsa";
urheilija.syntymävuosi = "1981-09-01";
urheilija.omapaino = 127;
urheilija.laji = "Kaljakellunta";
urheilija.saavutukset = "Kolmen kertainen kultamitalisti";
urheilija.linkki = "fi.wikipedia.org/wiki/Kaljakellunta";

// Testataan luodun olion tietoja
console.log(
  `Urheilija: ${urheilija.etunimi} ${urheilija.kutsumanimi} ${urheilija.sukunimi}`
);
console.log(`Syntymävuosi:  ${urheilija.syntymävuosi}`);
console.log(`Laji: ${urheilija.laji}`);
console.log(`Omapaino: ${urheilija.omapaino}`);
console.log(`Saavutukset: ${urheilija.saavutukset}`);
console.log(`Linkki: ${urheilija.linkki}`);
