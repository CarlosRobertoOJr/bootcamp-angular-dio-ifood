/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let precoEtanol = 4.90;
let precoGasolina = 5.85;
const tipoCombustivel = 'gasolina';
const gastoPorKm = 12;
let distanciaViagem = 467;
let totalLitros = (distanciaViagem/gastoPorKm)
let valorGasto;


if(tipoCombustivel === 'gasolina'){
    valorGasto = totalLitros*precoGasolina;
}else{
    valorGasto = totalLitros*precoEtanol;
}

console.log("O valor da Viagem é de: R$" + valorGasto.toFixed(2))