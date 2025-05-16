const prompt = require("prompt-sync")();
let nota,media=0;

for(let i=1; i<=5; i++){
    do{
        nota= Number(prompt("Nota "+i+" - Informe: (0 a 10) "));
        if(nota < 0 || nota > 10){
            console.log("A nota tem que ser entre 0 e 10");
        }
    }while(nota < 0 || nota > 10);
    media= media + nota
}

media= media/5;
console.log("A media é :"+media);
