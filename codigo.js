
function mostrarDato(){
    var entrada = document.getElementById('insertar');
    var texto = document.getElementById('resultado');
    texto.innerText += 'El numero es: + \n'+entrada.value
    
};

function vaciar(){
    var texto = document.getElementById('resultado');
    texto.innerText = '';
}

function sumarNumeros(){
    var texto = document.getElementById('resultado')
    var nuevo_numero = document.getElementById('insertar');
    resultado += parseInt( nuevo_numero.value); 
    texto.innerText += 'La suma es:  ' + resultado + '\n';
    
}


var resultado= 0;
// document.getElementById('boton').onclick = mifuncion;

