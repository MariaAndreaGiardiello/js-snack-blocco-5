//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// 1. creo array con 10 zucchine
const zucchine = [
    {
        nome: "Zucchina 1",
        peso: 10,
        lunghezza: 20,
    },
    {
        nome: "Zucchina 2",
        peso: 13,
        lunghezza: 8,
    },
    {
        nome: "Zucchina 3",
        peso: 20,
        lunghezza: 10,
    },
    {
        nome: "Zucchina 4",
        peso: 23,
        lunghezza: 6,
    },
    {
        nome: "Zucchina 5",
        peso: 17,
        lunghezza: 5,
    },
    {
        nome: "Zucchina 6",
        peso: 18,
        lunghezza: 17,
    },
    {
        nome: "Zucchina 7",
        peso: 20,
        lunghezza: 23,
    },
    {
        nome: "Zucchina 8",
        peso: 18,
        lunghezza: 9,
    },
    {
        nome: "Zucchina 9",
        peso: 10,
        lunghezza: 10,
    },
    {
        nome: "Zucchina 10",
        peso: 16,
        lunghezza: 20,
    }
]

// 2. creo due array per contenere zucchine < o > di 15 cm
const lunghezzaMag = [];
const lunghezzaMin = [];

// 3. creo variabile per generare la il totale del peso
let totale = 0;

// 4. creo ciclo for per comprendere tutte le lunghezze indicate all'intenro dell'array di zucchine
for ( let i = 0; i < zucchine.length; i++) {
//5. all'intenro del ciclo for creo un ciclo if per dividere le due lunghezze
    if (zucchine[i].lunghezza < 15) {
        lunghezzaMin.push(zucchine[i]);
    } else if (zucchine[i].lunghezza > 15) {
        lunghezzaMag.push(zucchine[i]);
    }
}

console.log(lunghezzaMag);
console.log(lunghezzaMin);

// 6. creo ciclo for per la somma
for ( let i = 0; i < zucchine.length; i++) {
   totale += zucchine[i].peso;
}
console.log(totale);