/*2. Escreva um algoritmo que valide o acesso de um usuário
fornecendo um código de acesso e uma senha. O código de
acesso: ABCD1234 E A senha válida é o número 1234. Devem
ser impressas as seguintes mensagens
• Exiba o texto: ACESSO PERMITIDO caso a senha seja
válida.
• Exiba o texto: "ACESSO NEGADO" caso a senha seja
inválida.
*/
const prompt = require('prompt-sync')();
let user = prompt('Digite o usuário: ');
let senha = Number(prompt('Digite a senha: '));


if (user == "ABCD1234" && senha == 1234){
    console.log("ACESSO PERMITIDO")
} else{
    console.log("ACESSO NEGADO")
}