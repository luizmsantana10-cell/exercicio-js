/*
Escreva um algoritmo que leia um número e informe se ele
é divisível por 3 e por 7.
*/
const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um numero: '));




if (num %3 === 0 && num %7 === 0){
    console.log("É divisível por 3 e 7")
} else{
    console.log("Não é divisível por 3 e 7")
}