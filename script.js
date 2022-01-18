/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var texto = document.getElementById("texto");
var salida = document.getElementById("msg");
var botonE = document.getElementById("botonE");

botonE.addEventListener("click", clickE);

function clickE() {
  var cadena = document.getElementById("texto").value;
  cadena = cadena.replace("e", "enter");
  cadena = cadena.replace("i", "imes");
  cadena = cadena.replace("a", "ai");
  cadena = cadena.replace("o", "ober");
  cadena = cadena.replace("u", "ufat");
  document.getElementById("msg").value = cadena;
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

botonD.addEventListener("click", clickD);

function clickD() {
  var cadena = document.getElementById("texto").value;
  for (let i = 0; i < cadena.length; i++) {
    cadena = cadena.replace("enter", "e");
    cadena = cadena.replace("imes", "i");
    cadena = cadena.replace("ai", "a");
    cadena = cadena.replace("ober", "o");
    cadena = cadena.replace("ufat", "u");
    document.getElementById("msg").value = cadena;
  }
}

/* --- Función de copiar --- */

function copy() {
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
