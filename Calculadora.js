function limpar(){
	document.getElementById('resultado').value = "";
}
  
function apagar(){
	document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1);
}
  
function escrever(num){
	document.getElementById("resultado").value += num;
}
function numeros(){
    var operacao = document.getElementById('resultado').value;
	var numeros = operacao.split(/[/*+-]/);

    if(operacao[0] === "*"||operacao[0] === "/"||operacao[0] === "-"||operacao[0] === "+"||operacao[0] === ""){
		alert("Erro!");
	}

    return numeros;
}
function operadores(){
    var operacao = document.getElementById('resultado').value;
	var op = operacao.split(/[0-9]/);
    var operadores = op.filter(x=>x!="");
    return operadores;
}
function calcularMulDiv(){
    var operadoresMulDiv = operadores();
    var numerosMulDiv = numeros();
    var retorno = [];
    var o = -1;

    for(var i = 0; i <= operadoresMulDiv.length+1;i++){
        if(operadoresMulDiv[i] === "*"){
            let indice = operadoresMulDiv.indexOf("*");
            let resposta = numerosMulDiv[indice] * numerosMulDiv[indice+1];
            numerosMulDiv.splice(indice,2,String(resposta));
            operadoresMulDiv.splice(indice,1);
            i=-1;
        }
        if(operadoresMulDiv[i] === "/"){
            let indice = operadoresMulDiv.indexOf("/");
            let resposta = numerosMulDiv[indice] / numerosMulDiv[indice+1];
            numerosMulDiv.splice(indice,2,String(resposta));
            operadoresMulDiv.splice(indice,1);
            i=-1;
        }
        
    }
    
    for(var i = 0; i < numerosMulDiv.length;i++){
        o++;
        retorno[o] = numerosMulDiv[i];
        o++;
        retorno[o] = operadoresMulDiv[i];
    }
    retorno.pop();
    return retorno;
}
function calcularPosNeg(){
    var valorRetornado = calcularMulDiv();

    var matematica = {
        '+': function (x, y) { return parseFloat(x) + parseFloat(y) },
        '-': function (x, y) { return x - y }
    }; //console.log(matematica['+'](x, y));

    for(var i=0;i<=valorRetornado.length;i++){
        if(valorRetornado[i]=="+"){
            let indice = i;
            let resposta = matematica['+'](valorRetornado[i-1], valorRetornado[i+1]);
            valorRetornado.splice(i-1,3,String(resposta));
        }
        if(valorRetornado[i]=="-"){
            let indice = i;
            let resposta = matematica['-'](valorRetornado[indice-1], valorRetornado[indice+1]);
            valorRetornado.splice(indice-1,3,String(resposta));
        }
    }
    
    return valorRetornado;
}
function igual(){
    var resultadoFinal = calcularPosNeg();
	document.getElementById('resultado').value = resultadoFinal;
}
