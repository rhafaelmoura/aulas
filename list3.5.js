let nota1 = parseInt(prompt("Digite 1° nota"));
let nota2 = parseInt(prompt("Digite 2° nota"));

let media = nota1 + nota2 / 2;  

if (media>=7){
    document.write("O Aluno está Aprovado com a Média: " + media);
}

else if(media<7){
    document.write("O Aluno ficou em Recuperação porque a media foi: " + media);
}

else if(media==10){
    document.write("o Aluno é fera, Média = " + media);
}