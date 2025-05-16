const prompt = require("prompt-sync")();

let n1,n2,n3,media=0,sexo;

sexo= prompt("Informe o sexo (m/f)");
n1= Number(prompt("Informe a primeira nota: "));
n2= Number(prompt("Informe a segunda nota: "));
n3= Number(prompt("Informe a terceira nota: "));
media= (n1 + n2 + n3) / 3;
console.log("A media é "+media);

if(media >= 7 || sexo == "m"){
    console.log("O aluno esta aprovado");
}else if(media >= 4){
    console.log("O aluno ficou de exame");
}else{
    console.log("O aluno esta reprovado");
}