function limpar(){
    document.getElementById('resultado').value = "";
}  
function apagar(){
    document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1);
}
function escrever(num){
    tela = String(num);
    
    document.getElementById("resultado").value += num;        

    if(document.getElementById('resultado').value === ""){
        document.getElementById("ponto").disabled = true;
        document.getElementById("divisao").disabled = true;
        document.getElementById("adicao").disabled = true;
        document.getElementById("multiplicacao").disabled = true;
        document.getElementById("subtracao").disabled = true;
    }
    if(tela == "*" || tela == "/" || tela == "+" || tela == "-"|| tela == "."){
        document.getElementById("ponto").disabled = true;
        document.getElementById("divisao").disabled = true;
        document.getElementById("adicao").disabled = true;
        document.getElementById("multiplicacao").disabled = true;
        document.getElementById("subtracao").disabled = true;
    }
    else{
        document.getElementById("ponto").disabled = false;
        document.getElementById("divisao").disabled = false;
        document.getElementById("adicao").disabled = false;
        document.getElementById("multiplicacao").disabled = false;
        document.getElementById("subtracao").disabled = false;
        
    }
}
function numeros(){
    var operacao = document.getElementById('resultado').value;
    let numerosString = operacao.split(/[/*+-]/);
    var numeros = [];
    for(i=0;i<numerosString.length;i++){
       	numeros[i] = parseFloat(numerosString[i]);
    }
    return numeros;
}
function operadores(){
    var operacao = document.getElementById('resultado').value;
    var op = operacao.split(/[0-9.]/);
    let operadores = op.filter(x=>x!="");
    return operadores;
}
function igual(){
    var resultadoFinal = calculo();
    document.getElementById('resultado').value = resultadoFinal;
}
function calculo(){
    var operador = operadores();
    var numero = numeros();

    for(var i = 0;i < numero.length;i++){
        if(operador[i] === "*"){
            let resposta = numero[i] * numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
            continue;
        }
        if(operador[i] === "/"){
            let resposta = numero[i] / numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
            continue;
        }
        
    }

    for(var i=0;i < numero.length;i++){
        if(operador[i] === "+"){
            let resposta = numero[i] + numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
            continue;
        }
        if(operador[i] === "-"){
            let resposta = numero[i] - numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
            continue;
	}
    }

    return numero;	
}
