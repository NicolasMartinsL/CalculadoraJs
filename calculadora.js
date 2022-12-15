function limpar(){
    document.getElementById('tela').innerHTML = "";
}
function apagar(){
    document.getElementById('tela').innerHTML = document.getElementById('tela').innerHTML.slice(0, -1);
}
function escrever(num){
  var numero = document.getElementById('tela').innerHTML;
  document.getElementById('tela').innerHTML= numero+num;
}
function calcular()
{
    var resultado = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = eval(resultado);
    
}
