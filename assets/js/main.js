
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma





/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedere all'utente di inserire  una parola
//funzone palindrmoa


/*
let nomeUtente = "";
nomeUtente = prompt("inserisci una parola");
let nomeInverso = parolaDivisa(nomeUtente);


function parolaDivisa(reverse){
 let reverseWord = reverse.split('').reverse().join('');
 return  reverseWord;

}


if (nomeUtente == nomeInverso){
    console.log("la parola è palindroma" );
}else{
    console.log('la parola non è palindroma')
}


*/




/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


// l'utente inserisce da prompt se pari o dispari

// se l'utente sceglie pari il computer sceglie dispari

//se l'utente sceglie dispari il computer sceglie pari

//creo una funzione che genera numeri  (1-5) v

//creo una funzione che somma due numeri 

//creo una funzione che determina se un numero è pari o dispari 


//funzioni
//numero Random

function randomNumber(min,max) {
    
    return num = Math.floor(Math.random() * (max - min + min) ) + min ;
     
}

//Somma due numeri

function sommaNumeri(x,y){
    let somma = x + y; 
    return somma;

}


//pari o dispari
let valoreControllo = '';
function pariDispari(){
   
    
  if (sommaDeiValori % 2 == 0 ){
    valoreControllo = 'pari';
       return valoreControllo;
    }else{
        valoreControllo = 'dispari';
        return valoreControllo;
    }
   
    
}

// fine funzioni


let sceltaPariDispari = "";

//controllo
for( ; ; ){
    //input pari dispari
    sceltaPariDispari = prompt("inserisci pari o dispari");

     if(sceltaPariDispari == 'pari'){
        
        console.log(`la tua scelta è:  ${sceltaPariDispari}`)
        alert("hai scelto : pari");
        break; 
    }
    else if(sceltaPariDispari == 'dispari'){
        
        console.log(`la tua scelta è:  ${sceltaPariDispari}`)
        alert("hai scelto : dispari");
        break; 
    }  
    else{
        alert("non hai inserito un valore valido");   
    }

}


//numero inserito dall'utente

let numeroUtente = 0;   


for (; ;){
    let inputNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
    
    if (inputNumero >= 1 && inputNumero <= 5){
        numeroUtente = inputNumero;
        break;
    }else{
    console.log('non hai inserito una valore valido')

    }
    
    
}

alert(`il tuo numero è:  ${numeroUtente} `);



// creo un numero random del pc
let numeroRandompc = randomNumber(1,5);
alert(`il numero random del pc è ${numeroRandompc} `);

//sommo i due valori ottenuti
let sommaDeiValori = sommaNumeri(numeroUtente , numeroRandompc );
alert(`la somma dei due valori è ${sommaDeiValori}`)

//controllo se il valore è pari o dispari
let valoreFinale = pariDispari(sommaDeiValori);
alert(`ìl valore finale è ${valoreFinale} `);

console.log(`${sommaDeiValori} è: ${valoreControllo}`)

//vediamo chi ha vinto 


if(sceltaPariDispari == valoreControllo){
    console.log(` hai vinto` );
} else {
    console.log(`hai perso`);
}











   
    



















