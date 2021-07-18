/// ALCUNE  PROVE DI CODEWARS ///

//creo funzione ,dato come parametro un  array alfanumerico, che  sostituisce il codiceCarattere di  vocale , se presente, in carattere alfabetico corrispondente, e ritorno l'array con numeri e lettere(se presenti vocali appunto)

function isVow(a) {
  //creo array vocali
  const vocali = ["a", "e", "i", "o", "u"];

  //creo array vuoto per immettere codicecarattere di vocali
  let ArrayCharCode = [];

  //immetto codicecaratteri di vocali in array ArrayCharCode
  vocali.forEach((voc) => {
    ArrayCharCode.push(voc.charCodeAt(voc.indexOf(voc)));
  });

  //ciclo con method .map ogni singolo valore di array dato come parametro e se ci sono valori numerici coincidenti a codicecaratteri di vocali ritorno la vocale se no ritorno numeri dati nell'array parametro
  const arrayFinale = a.map((el) => {
    if (ArrayCharCode.includes(el)) {
      return String.fromCharCode(el);
    } else {
      return el;
    }
  });

  console.log(arrayFinale);

  //ritorno array customizzato
  return arrayFinale;
}

isVow([97, 23, 97, 105, 345, 11, 111]);

/////////////////////////////

// fare funzione data una stringa con parametro stringa, eliminando '-' o '_' se presenti nella stringa, e facendo diventare maiuscola ciascuna lettera iniziale dopo i '-'  o '_' se presente.La lettera iniziale della stringa non dovrà mutare se maiuscola resta maiuscola se minuscola resta minuscola.

const toCamelCase = function (str) {
  //creo variabile con string vuota che mi serve per aver un ritorno di '' nel caso non passo niente in str
  let separa = "";

  //se non ci sono lettere ritorno ''
  if (str.length === 0) return "";

  //se str é presente - o _ suddivido le parole creando array
  if (str.includes("-")) {
    separa = str.split("-");
  }
  if (str.includes("_")) {
    separa = str.split("_");
  }

  // prendo come 1°array prima parola perchè devo avere prima lettera che non varia la camelCase
  const primaParola = separa[0];

  //prendo da seconda parola in avanti come 2° array
  const altreParola = separa.slice(1);

  //ciclo con .map array vario ciascuna parola con  lettera inizale maiuscola e il restante delle lettere in minuscolo e faccio diventare alla fine del ciclo tutto una stringa con .join
  const altreParoleCustom = altreParola
    .map((parola) => parola[0].toUpperCase() + parola.slice(1).toLowerCase())
    .join("");

  console.log(primaParola + altreParoleCustom);

  //aggiungo prima parola ad altre parole in variabile parola
  const parola = primaParola + altreParoleCustom;

  //ritorno variabile
  return parola;
};

toCamelCase("the_stealth_warrior");

toCamelCase("The-Stealth-Warrior");

toCamelCase("A-B-C");

toCamelCase("");

/////////////

// crea funzione dati numeri come parametri positivi o negativi facendo sommare i vari numeri interi tra i due  e ritornare risultato , se due parametri uguali ritorna il valore dei parametri

function getSum(a, b) {
  //creo array numeri
  let numeri = [];

  //se numeri parametri uguali ritorno il numero stesso es:(1,1) return 1
  if (a === b) {
    return a;
  }
  //ciclo in ambo i casi sia a che b in base a se uno maggiore dell'altro così da avere tutti gli interi tra di loro e li aggiungo in array vuoto -> numeri
  if (a < b) {
    for (let i = a; i <= b; i++) {
      numeri.push(i);
    }
  }

  if (a > b) {
    for (let i = b; i <= a; i++) {
      numeri.push(i);
    }
  }

  //sommo con loop metodo .reduce tutti i numeri in array numeri per averli in un unico valore

  const sommaNumeri = numeri.reduce(
    (accumulatore, elementocurrent) => accumulatore + elementocurrent,
    0
  );

  console.log(sommaNumeri);

  //ritorno valore numerico finale

  return sommaNumeri;
}

getSum(1, 4);

getSum(3, -4);

getSum(1, 1);

/////////////////

//trova il numero al quadrato perfetto prossimo rispetto al numero al quadrato del parametro immesso, se parametro di funzione non é un numero quadrato ritorna -1.

function findNextSquare(sq) {
  let provaNumero = 0; //contatore per divisione rispetto a numero al quadrato

  let square; //variabile dove immetto numero moltiplicato per se stesso che mi da risultato del parametro immesso

  //ciclo il contatore fino a numero parametro e controllo che dividendo parametro per contatore non mi dia resto e che al quadrato sia uguale a parametro stesso. Ritorno numero che al quadrato fa parametro + 1  e lo rendo al quadrato così da avere il prossimo perfetto quadrato.
  while (provaNumero < sq) {
    if (sq % provaNumero === 0 && provaNumero ** 2 === sq) {
      square = provaNumero;

      return (square + 1) ** 2;
    } else {
      square = -1;
    }
    provaNumero++;
  }

  // ritorno  -1 se non c'è  il prossimo quadrato perfetto di sq
  return -1;
}

findNextSquare(49); //64 = 8**2

findNextSquare(121); //144 = 12**2
