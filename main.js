function playSound(idSound) {
     document.querySelector(idSound).play();
}

const ListTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < ListTeclas.length; i++) {
     const tecla = ListTeclas[i];
     const instrumento = tecla.classList[1];
     const idInstru = `#sonido_${instrumento}`;

     tecla.onclick = function () {
          playSound(idInstru)

     };

     tecla.onkeydown = function (evento) {
          if (evento.code === 'space' || evento.code === 'Enter') {
               tecla.classList.add('activa')
          }

     };

     tecla.onkeyup = function () {

          tecla.classList.remove('activa');


     }

}
 


