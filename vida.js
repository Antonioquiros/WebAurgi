// Se declaran als variabels y se usa el querySelector para llamar a sus clases desde el html
const pista = document.querySelector(".pista");
const imagenes = document.querySelectorAll(".pista img");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");

//Se crea una variable para el indice, se usará para los botones
let indice = 0;

function mostrar(){
    pista.style.transform = `translateX(-${indice * 100}%)`;
}

function siguiente(){
    indice = (indice + 1) % imagenes.length;
    mostrar();
}

function anterior(){
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrar();
}

btnSiguiente.addEventListener("click", siguiente);
btnAnterior.addEventListener("click", anterior);

