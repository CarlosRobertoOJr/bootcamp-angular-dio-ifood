/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoCombustivel = 5.65;
let KmLitro = 11;
let kmDistancia = 385;

const consumoLitros = kmDistancia/KmLitro
const valorViagem = consumoLitros*precoCombustivel


console.log("O valor da Viagem é de: R$" + valorViagem.toFixed(2));