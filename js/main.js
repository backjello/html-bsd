let variabile
const constante = "prova" // string
let numero = 4 // number
let vero = true // boolean
let nonDefinito = undefined // undefined

numero = "una stringa" // una variabile può "cambiare" tipo

console.log(numero)

const pi = 3.14
let numero1 = 3
let numero2 = 4
let somma = numero1 + numero2 // somma (7)
let sottrazione = numero1 - numero2 // sottrazione (-1)
let prodotto = numero1 * numero2 // moltiplicazione (12)
let divisione = numero1 / numero2 // divisione (0.75)

let restoDivisione = 15 % 4 // resto della divisione (3)
// mostro più variabili in un unica riga di codice
console.log(somma, sottrazione, prodotto, divisione, restoDivisione);


let somma2 = 3 + "ciao" // "3ciao"
let somma3 = "3" + "4" // "34"
console.log(somma2, somma3);

const sommaMaggioreDi8 = somma > 8 // boolean true se somma è maggiore di 8
// o false se non lo è

// ! vuol dire "non"
const sommaNonMaggioreDi8 = !sommaMaggioreDi8

const ilMioAmicoEdisponibile = true
const nonPiove = true
// entrambe le condizioni devono essere vere
const vadoAlParco = ilMioAmicoEdisponibile && nonPiove // true

const ilPapaMiPrestaLaMacchina = true
const laMammaMiPrestaLaMacchina = false
// basta una delle due condizioni per ottenere true
const staseraEsco = ilPapaMiPrestaLaMacchina || laMammaMiPrestaLaMacchina

console.log("stasera esco :", staseraEsco);
console.log("vado al parco:", vadoAlParco);

// if(condizione){
// codice
//}
if (vadoAlParco) {
    console.log("che bello vado al parco");
}
else if (vadoAlParco || staseraEsco) {
    console.log("oggi faccio qualcosa di divertente");
}
else {
    console.log("che peccato non vado al parco")
}

const nome = "francesco"
if (nome == "luigi") {
    console.log("ciao lu");
}
else if (nome == "luca") {
    console.log("ciao luke");
}
else if (nome == "giacomo") {
    console.log("ciao Jack");
}
else if (nome == "mario") {
    console.log("ciao supermario");
}
// questa serie di if else è equivalente a
switch (nome) {
    case 'luigi':
        console.log("ciao lu");
        break;
    // ...
    case 'mario':
        console.log("ciao supermario");
        break;

    default: // se nessuna delle precedenti case si verifica viene eseguito
        console.log("ciao " + nome)
}
// i++ è equivalente a i = i + 1 che è equivante a i+=1 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while(condizione){ codice }
let valore = 2500
while (valore < 2500) {
    valore = valore * 5
    console.log(valore);
}
valore = 2500
do {
    valore = valore * 5
    console.log(valore);
} while (valore < 2500)

// nel ciclo while la comparazioen viene fatta all'inizio
// quindi se la condizione è falsa non viene MAI eseguito
// viceversa in un ciclo do while la comparazione viene
// eseguite al termine di ogni iterazione del ciclo
// e di conseguenza avrò sempre almeno una esecuzione del ciclo


// ARRAY (in questo caso dichiaro un array di strings)
const nomi = ["mario", "luigi", "antonio", "francesco"]

// anche se consentito è caldamente scosigliato:
const arrayAcaso = [2, "ciao", {}, false, "sadfas", undefined] // NON FARLO

console.log("gli elementi all'iterno di nomi sono: ", nomi.length)


console.log("il primo nome che conosco è ", nomi[0]) // mario
console.log("il quinto nome è ", nomi[4]) // undefined

// nomi = ["giacomo"] non posso farlo
nomi[0] = "giacomo"
console.log(nomi);

for (let i = 0; i < nomi.length; i++) {
    const element = nomi[i];
    console.log("il nome ", i + 1, " è ", element);
}
/* 
 è equivalente a
 */
for (const nome of nomi) {
    console.log(nome);
}

const persona = {
    nome: "mario",
    cognome: "rossi",
    eta: 35
}

persona.residenza = "Bergamo"
console.log("il nome della persona è ", persona.nome);
console.log("tutti i dati di persona sono ", persona)
console.log("la data di nascita della persona è ", persona.dataDiNascita) // undefined

persona['eta'] = 40 // equivalente a persona.eta = 40

const persone = [
    {
        nome: 'luigi',
        cognome: 'verdi',
        eta: 40
    },
    persona,
    {
        nome: 'francesco',
        cognome: 'bianchi',
        eta: 50
    }
]
console.log(persone);


saluta() // viene eseguito il codice di saluta (cioè un console.log())

// altro codice

saluta()
saluta()
saluta()
saluta()
saluta()


function saluta() {
    console.log("hello");
}


