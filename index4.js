const prompt = require("prompt-sync")();

let notas = [], media=0;

for(let i=0; i<5; i++){
    do{
        notas[i]= Number(prompt("Nota "+(i+1)+" - Informe: (0 a 10) "));
        if(notas[i] < 0 || notas[i] > 10){
            console.log("A nota tem que ser entre 0 e 10");
        }
    }while(notas[i] < 0 || notas[i] > 10);
    media= media + notas[i]
}

media= media/5;
console.log(notas);
console.log("A media é :"+media);

if(media >= 7){
    console.log("O aluno esta aprovado");
}else if(media >= 4){
    console.log("O aluno ficou de exame");
}else{
    console.log("O aluno esta reprovado");
}