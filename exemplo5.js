let nota = prompt("Digite sua nota");

nota = parseFloat(nota);

if (nota >= 7){
    alert("APROVADO");
} else if (nota >= 5){
    alert("RECUPERAÇÃO");
} else{
    alert("REPROVADO");
}