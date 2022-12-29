function limpar(){
	document.getElementById('resultado').value = "";
}
  
function apagar(){
	document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1);
}
  
function escrever(num){
	document.getElementById("resultado").value += num;
}
/*function verificaSinal(telaDividida){
		var i = 1;
		var sinal;
		do {
			if(telaDividida[i]== "*"){
					sinal = "*";
					return sinal;
				}
				if(telaDividida[i]== "/"){
					sinal = "/";
					return sinal;
				}
				if(telaDividida[i]== "+"){
					sinal = "+";
					return sinal;
				}
				if(telaDividida[i]== "-"){
					sinal = "-";
					return sinal;
				}else{
					sinal = "error";
				}
				i=i+2;
		} while (i<=telaDividida.length);		
}*/
function calculo1(telaDividida){
	var respostaCalculo1;
	var indice = 1;
	var sinal = telaDividida[1];
	if(sinal=="*"){
		respostaCalculo1 = matematica['*'](telaDividida[0], telaDividida[2]);
		return respostaCalculo1;
	}
	if(sinal=="/"){
		respostaCalculo1 = matematica['/'](telaDividida[0], telaDividida[2]);
		return respostaCalculo1;
	}
	if(sinal=="+"){
		respostaCalculo1 = matematica['+'](telaDividida[0], telaDividida[2]);
		return respostaCalculo1;
	}
	if(sinal=="-"){
		respostaCalculo1 = matematica['-'](telaDividida[0], telaDividida[2]);
		return respostaCalculo1;
	}else{
		return alert("erro")
	}
}
function calculo2(primeiraResposta,telaDividida){
	var respostaCalculo2;
	var indice  = 3;
	var sinal = telaDividida[3];
	if(sinal=="*"){
		respostaCalculo2 = matematica['*'](primeiraResposta, telaDividida[4]);
		return respostaCalculo2;
	}
	if(sinal=="/"){
		respostaCalculo2 = matematica['/'](primeiraResposta, telaDividida[4]);
		return respostaCalculo2;
	}
	if(sinal=="+"){
		respostaCalculo2 = matematica['+'](primeiraResposta, telaDividida[4]);
		return respostaCalculo2;
	}
	if(sinal=="-"){
		respostaCalculo2 = matematica['-'](primeiraResposta, telaDividida[4]);
		return respostaCalculo2;
	}else{
		return alert("erro");
	}
}
var matematica = {
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '+': function (x, y) { return parseFloat(x) + parseFloat(y) },
    '-': function (x, y) { return x - y }
	//console.log(matematica['+'](5, 5));
};

function calculoInverso1(telaDividida){
	var respostaInverso1;
	var indice  = 3;
	var sinal = telaDividida[3];
	if(sinal=="*"){
		respostaInverso1 = matematica['*'](telaDividida[2], telaDividida[4]);
		return respostaInverso1;
	}
	if(sinal=="/"){
		respostaInverso1 = matematica['/'](telaDividida[2], telaDividida[4]);
		return respostaInverso1;
	}else{
		return alert("erro5");
	}
}
function calculoInverso2(telaDividida,verificaCalculoInverso1){
	var respostaInverso2;
	var indice  = 1;
	var sinal = telaDividida[1];
	if(sinal=="*"){
		respostaInverso2 = matematica['*'](telaDividida[0], verificaCalculoInverso1);
		return respostaInverso2;
	}
	if(sinal=="/"){
		respostaInverso2 = matematica['/'](telaDividida[0], verificaCalculoInverso1);
		return respostaInverso2;
	}
	if(sinal=="+"){
		respostaInverso2 = matematica['+'](telaDividida[0], verificaCalculoInverso1);
		return respostaInverso2;
	}
	if(sinal=="-"){
		respostaInverso2 = matematica['-'](telaDividida[0], verificaCalculoInverso1);
		return respostaInverso2;
	}else{
		return alert("erro");
	}
}
function calcular2(){
	var mostra = document.getElementById('resultado').value;
	var telaDividida = mostra.split(" ");
	var verificaCalculoInverso1;
	if(telaDividida[3]=="*"||telaDividida[3]=="/"){
		verificaCalculoInverso1 = calculoInverso1(telaDividida)
		respostaDefinitiva = calculoInverso2(telaDividida,verificaCalculoInverso1)
	}
	document.getElementById('resultado').value = respostaDefinitiva;
}
function calcular(){
	var resposta;
	var mostra = document.getElementById('resultado').value;
	var telaDividida = mostra.split(" ");

	if(telaDividida[0] === "*"||telaDividida[0] === "/"||telaDividida[0] === "-"||telaDividida[0] === "+"||telaDividida[0] === ""){
		alert("erro");
	}
	
	if(telaDividida.length === 3){
		resposta = calculo1(telaDividida);
	}
	if(telaDividida.length === 5){
		primeiraResposta = calculo1(telaDividida);
		resposta = calculo2(primeiraResposta,telaDividida);
	}
	var result = resposta;
	document.getElementById('resultado').value = result; 
}
function igual(){
	var mostra = document.getElementById('resultado').value;
	var telaDividida = mostra.split(" ");
	if(telaDividida.length == 3){
		calcular();
	}
	if(telaDividida.length == 5){
		if(telaDividida[3] == "*"||telaDividida[3] == "/"){
			calcular2();
		}else{
			calcular();
		}
	}
}
