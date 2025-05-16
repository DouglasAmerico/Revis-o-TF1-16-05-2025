const prompt = require("prompt-sync")();

let numeros = [];

for(let i=0;i<10;i++){
    numeros[i]= prompt("Informe o valor da posicao "+i+": ");
}

for(let i=0;i<10;i++){
    console.log("Posicao "+i+" valor: "+numeros[i]);
}