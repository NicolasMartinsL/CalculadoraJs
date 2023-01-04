function limpar(){
	document.getElementById('resultado').value = "";
}
  
function apagar(){
	document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1);
}
  
function escrever(num){
	let escrito = document.getElementById("resultado").value;
	if(escrito[0] === "*"||escrito[0] === "/"||escrito[0] === "+"||escrito[0] === "."){
		document.getElementById("resultado").value = "Erro!"
	}
	if(num == "*" && escrito.slice(-1) == "*"){document.getElementById("resultado").value = "Erro!"}
	if(num == "/" && escrito.slice(-1) == "/"){document.getElementById("resultado").value = "Erro!"}
	if(num == "+" && escrito.slice(-1) == "+"){document.getElementById("resultado").value = "Erro!"}
	if(num == "-" && escrito.slice(-1) == "-"){document.getElementById("resultado").value = "Erro!"}
	if(num == "." && escrito.slice(-1) == "."){document.getElementById("resultado").value = "Erro!"}
	document.getElementById("resultado").value += num;}
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

    for(var i = 0; i <= numero.length;i++){
        if(operador[i] === "*"){
            let resposta = numero[i] * numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
        }
        if(operador[i] === "/"){
            let resposta = numero[i] / numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
        }
        
    }

    for(var i=0;i<=numero.length;i++){
        if(operador[i] === "+"){
            let resposta = numero[i] + numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
        }
        if(operador[i] === "-"){
            let resposta = numero[i] - numero[i+1];
            numero.splice(i,2,resposta);
            operador.splice(i,1);
            i=-1;
		}
    }

    return numero;	
}
