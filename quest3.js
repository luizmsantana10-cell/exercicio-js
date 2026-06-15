/*
Elabore um o algoritmo que possa entrar com nome do produto
e valor da compra e imprima o nome do produto e o valor
da venda.
*/
const prompt = require('prompt-sync')();
let produto = prompt("Digite o nome: ");
let valor = Number(prompt("Digite o valor: "));
let n70 = 0.70
let n50 = 0.50
let n40 = 0.40
let n30 = 0.30

if (valor <= 10){
    console.log(produto+" lucro de R$"+ valor * n70)

} else if(valor <= 30){
    console.log(produto+" lucro de R$"+ valor * n50)

} else if( valor <= 50){
    console.log(produto+" lucro de R$"+ valor * n40)
}else {
    console.log(produto+" lucro de R$"+ valor * n30)
}