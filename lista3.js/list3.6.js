let x = parseInt(prompt("Digite o primeiro Número"));
let y = parseInt(prompt("Digite o segundo Número"));
let z = parseInt(prompt("Digite o Terceiro Número"));


if(x>y && x>z){
    alert("O 1° é Número Maior, "+x+" foi o Número Digitado");
}
else if(y>x && y>z){
    alert("O 2° é Número Maior "+y+" foi o Número Digitado");
}
else{
    alert("O 3° Número é Maior "+z+" foi o Número Digitado");
}
