function mostrar() {
    var inpu = document.getElementById("casa");
    var texto = document.getElementById("primer-parrafo");
    texto.innerText += inpu.value;
};
document.getElementById(boton).onclick = mostrar;

