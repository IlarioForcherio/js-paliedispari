
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

function randomNumber() {
    
    return num = Math.floor(Math.random() * 5) + 1 ;
     
}

//Somma due numeri

function sommaNumeri(num1,num2){
    return num1 + num2 
}


//pari o dispari

function pariDispari(pari){
  
    if ((pari % 2) == 0 ){
       alert("il numero è pari")
       return true
    }else{
       alert("il numero è dispari")  
      return  false
      
    }
    
}


let inputPariDispari = prompt("scegli pari o dispari");

let inputNumero = 0;
let numeroUtente = 0;

for (let inputNumero = 0; inputNumero <= 5  ; inputNumero++ ){
    
    let inputNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
    
    if (inputNumero > 5 ){
        alert('il numero è maggiore di 5');
        
    }else{  
    
     numeroUtente = inputNumero;
     alert("il tuo numero è:"+ " " + numeroUtente )
     break;
    }
}
// inserire anche il controllo del numero (se quello che l'utente ha inserito è un numero)



 //numero random del pc
let numeroRandomPc = randomNumber();
alert("il numero del pc è: " + numeroRandomPc );

//somma dei due numeri 
alert("la somma dei numeri è :" + " " + sommaNumeri(numeroUtente,numeroRandomPc));


//numero finale (pari o dispari)
let numeroFinale = pariDispari(sommaNumeri(numeroUtente,numeroRandomPc));

if (numeroFinale == true ){
    alert("hai vinto");
}else{
    alert("hai perso");
}





//console.log(pariDispari(sommaNumeri(4,2))); 













   
    



















