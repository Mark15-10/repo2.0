
function mifuncion(){
    var entrada = document.getElementById('insertar');
    var texto = document.getElementById('primer-parrafo');
    texto.innerText += entrada.value

};


document.getElementById('boton').onclick = mifuncion;

