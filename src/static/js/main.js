/*
  Vreau sa definesti mai jos mai multe functii care sa faca operatii cu array-uri.
  Array-urile au doar numere in ele, poti sa alegi tu ce numere sa aiba, dar sa aiba minim 4 elemente
  Vreau mai multe seturi de teste pentru fiecare in parte

  Functiile sunt urmatoarele:

  - arraySuma(array) - imi aduna toate elementele din array si intoarce suma
    eg: [1, 3, 5, 7] returns 16
  - arrayLaPuterea2(array) = imi intoarce valoarea elementului array-ului la puterea a 2-a
     eg: [1, 2, 3, 4] returns [1, 4, 9, 16]
  - arrayInvers(array) - imi intoarce elementele din array in ordine inversa
    eg: [1, 2, 3, 4] returns [4, 3, 2, 1]
*/


function arraySuma(array){
  var suma = 0;
  for (var i = 0; i < array.length; i++) {
    suma = array[i] + suma
    }
    return suma;
  }


function arrayLaPuterea2(array){
  var puterea = [];
  for (var i = 0; i < array.length; i++) {
    puterea [i]= Math.pow(array[i],2);
  }
  return puterea;
}

function arrayInvers(array){
  var invers = [];
  var index = 0;

  for (var i = array.length - 1; i >= 0; i--) {
    invers[index] = array[i];
    index = index + 1;
  }

  return invers;
}

function secventaNr(max, vreauPare) {
  var par = [];

  var i = 2;

  if(!vreauPare){

    i = 1;
  }

  for (; i <= max ; i = i + 2) {
    par.push(i);
  }
  return par;
}

function secventaNrPare(max){
  return secventaNr(max,true);
}

function secventaNrImpare(max) {
  return secventaNr(max,false);
}

function secventaNrPareInversa(max){
  var array = secventaNrPare(max);
  var arrayInv = arrayInvers(array);
  return arrayInv;

}

function secventaNrImpareInversa(max){
  var array = secventaNrImpare(max);
  var arrayImp = arrayInvers(array);
  return arrayImp;

}

function sumaPatratelorNumerelorPare(max){
  var NrPar = secventaNrPare(max);
  var Putere = arrayLaPuterea2(NrPar) ;
  var Sum = arraySuma(Putere);
  return Sum;
}
