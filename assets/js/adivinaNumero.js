document.addEventListener('DOMContentLoaded', function() {

    
    const botonAdivinar = document.getElementById('adivinar');
    const resultadoElemento = document.getElementById('resultado');
  
    botonAdivinar.addEventListener('click', function() {
      adivinarNumero();
    });
  
    function adivinarNumero() {
      let min = 1;
      let max = 100;
      let intentos = 0;
  
      while (min <= max) {
        intentos++;
        let numeroAdivinado = Math.floor((min + max) / 2);
        let confirmacion = confirm(`¿Es tu número ${numeroAdivinado}?`);
  
        if (confirmacion) {
          resultadoElemento.textContent = `¡Tu número es el ${numeroAdivinado}! ¡Excelente decisión!`;
          return;
        } else if (confirm("¿Tu número es mayor que " + numeroAdivinado + "?")) {
          min = numeroAdivinado + 1;
        } else {
          max = numeroAdivinado - 1;
        }
      }
  
      resultadoElemento.textContent = "No pude adivinar tu número en " + intentos + " intentos.";
    }
  });
  
  
  
  