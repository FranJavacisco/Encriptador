function encriptar() {
  var texto = document.getElementById("inputText").value;
  var desplazamiento = parseInt(document.getElementById("shift").value);
  var textoEncriptado = "";

  for (var i = 0; i < texto.length; i++) {
    var charCode = texto.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Mayúsculas
      textoEncriptado += String.fromCharCode((charCode - 65 + desplazamiento) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Minúsculas
      textoEncriptado += String.fromCharCode((charCode - 97 + desplazamiento) % 26 + 97);
    } else {
      // Otros caracteres
      textoEncriptado += texto.charAt(i);
    }
  }

  document.getElementById("output").innerText = "Texto Encriptado: " + textoEncriptado;
}

function desencriptar() {
  var texto = document.getElementById("inputText").value;
  var desplazamiento = parseInt(document.getElementById("shift").value);
  var textoDesencriptado = "";

  for (var i = 0; i < texto.length; i++) {
    var charCode = texto.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Mayúsculas
      textoDesencriptado += String.fromCharCode((charCode - 65 - desplazamiento + 26) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Minúsculas
      textoDesencriptado += String.fromCharCode((charCode - 97 - desplazamiento + 26) % 26 + 97);
    } else {
      // Otros caracteres
      textoDesencriptado += texto.charAt(i);
    }
  }

  document.getElementById("output").innerText = "Texto Desencriptado: " + textoDesencriptado;
}

function limpiar() {
  document.getElementById("inputText").value = "";
  document.getElementById("shift").value = "";
  document.getElementById("output").innerText = "";
}
