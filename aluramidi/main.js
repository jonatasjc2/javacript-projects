
const listaDeSons = document.querySelectorAll('.sound');
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idElementoSom){

    listaDeSons[idElementoSom].play();   
}

/*listaDeTeclas[0].onclick = function (){
    tocaSom(0);
}*/
let contador = 0
while(contador < listaDeTeclas.length){

    listaDeTeclas[contador].onclick = function () {
        tocaSom(0);
    }
    contador = contador +1;
    console.log(contador);
}
  

