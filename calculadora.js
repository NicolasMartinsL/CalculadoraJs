function limpar(){
	document.getElementById('resultado').value = "";
  }
  
  function apagar(){
	document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1);
  }
  
  function escrever(num){
	document.getElementById("resultado").value += num;
  }
  
  function igual(){
	var res = [];
	var answer;
  
	  if(document.getElementById("resultado").value.includes("+")){
		res = document.getElementById("resultado").value.split('+');
		answer = parseFloat(res[0]) + parseFloat(res[1]);
	  }
	  else if(document.getElementById("resultado").value.includes("-")){
		res = document.getElementById("resultado").value.split('-');
		answer = parseFloat(res[0]) - parseFloat(res[1]);
	  }
	  else if(document.getElementById("resultado").value.includes("/")){
		res = document.getElementById("resultado").value.split('/');
		answer = parseFloat(res[0]) / parseFloat(res[1]);
	  }
	  else if(document.getElementById("resultado").value.includes("*")){
		res = document.getElementById("resultado").value.split('*');
		answer = parseFloat(res[0]) * parseFloat(res[1]);
	  }
	  else{
		answer = parseFloat(document.getElementById("resultado").value);
	  }
	return answer;
  }
  
  function calcular(){
	var result = igual();
	document.getElementById('resultado').value = result; 
  }