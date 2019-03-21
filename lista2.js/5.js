let gph =parseFloat(prompt("Ganho de horas trabalhadas"));
let nht =parseFloat(prompt("Horas trabalhadas por Mês"));

let calc = gph*nht;
let calc1= calc*0.11;
//alert(calc1);
let calc2= calc*0.08;
//alert(calc2);
let calc3= calc*0.05;
//alert(calc3);


alert("Salário Bruto: "+calc+" R$"+
      "\n- IR (11%): "+calc1+" R$"+
      "\n- INSS (8%): "+calc2+" R$"+
      "\n- Sindicato (5%): "+calc3+" R$"+
      "\n Salário Líquido: "+(calc-calc1-calc2-calc3)+" R$");