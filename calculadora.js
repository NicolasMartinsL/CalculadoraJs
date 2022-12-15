/*var b1 = document.querySelector("b1");
var b2 = document.querySelector("b2");
var b3 = document.querySelector("b3");
var b4 = document.querySelector("b4");
var b5 = document.querySelector("b5");
var b6 = document.querySelector("b6");
var b7 = document.querySelector("b7");
var b8 = document.querySelector("b8");
var b9 = document.querySelector("b9");
var b0 = document.querySelector("b0");
var bdiv = document.querySelector("bdiv");
var bmul = document.querySelector("bmul");
var bmen = document.querySelector("bmen");
var bmai = document.querySelector("bmai");
var bigu = document.querySelector("bigu");
var bpon = document.querySelector("bpon")
var blimpar = document.querySelector("blimpar");
var tela = document.querySelector("h2");
const numeros = document.querySelectorAll('[id*=b]');
document.onclick.b1*/

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
