const numero = 10 ;
const IsNumeroDivisivelPor5 = (numero % 5) === 0;

console.log("O Numero " + numero + " é divisivel por 5 e diferente de Zero?")

if(numero === 0){
    console.log('Não');
}else if(IsNumeroDivisivelPor5){
    console.log('Sim')
}else{
    console.log('Não')
}