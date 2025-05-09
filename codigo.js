
function mostrarDato(){
    var entrada = document.getElementById('insertar');
    var texto = document.getElementById('resultado');
    texto.innerText += 'El numero es:'+entrada.value + '\n';
    
};

function vaciar(){
    var texto = document.getElementById('resultado');
    var texto2 = document.getElementById('total')
    texto.innerText = '';
    resultado = ;
    texto2.innerText= resultado;
}

function sumarNumeros(){
    var total = document.getElementById('total');
    var texto = document.getElementById('resultado')
    var nuevo_numero = document.getElementById('insertar');
    resultado += parseInt( nuevo_numero.value); 
    texto.innerText += 'La suma es:  ' + resultado + '\n';
    if (resultado>10){
        total.innerText = resultado;
    }
    else{
        total.innerText ='La suma es menoro  igual a 10';
    }
    
}
function tabla(){
    var numero = document.getElementById('insertar');
    numero = parseInt(numero.value)
    var texto = document.getElementById('tabla');
    i = 0
    while(i<13){
        texto.innerText+= numero +" x " + i+ "=" + (numero*i)+'\n';
        i++
    }

}

var resultado= 0;


