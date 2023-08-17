document.addEventListener("DOMContentLoaded", function() {
  const botonVerificar = document.getElementById("botonVerificar");
  const resultado = document.getElementById("resultado");

  botonVerificar.addEventListener("click", function() {
    const day = parseInt(document.getElementById("dia").value);
    const month = parseInt(document.getElementById("mes").value) - 1;
    const year = parseInt(document.getElementById("anio").value);
    
    const fecha = new Date(year, month, day);

    if (isNaN(fecha.getTime())) {
      resultado.textContent = "Fecha inválida.";
      return;
    }

    const diaSemana = fecha.getDay();

    let resultadoTexto = "";
    
    switch (diaSemana) {
      case 0:
        resultadoTexto = "Domingo";
        break;
      case 1:
        resultadoTexto = "Lunes";
        break;
      case 2:
        resultadoTexto = "Martes";
        break;
      case 3:
        resultadoTexto = "Miércoles";
        break;
      case 4:
        resultadoTexto = "Jueves";
        break;
      case 5:
        resultadoTexto = "Viernes";
        break;
      case 6:
        resultadoTexto = "Sábado";
        break;
      default:
        resultadoTexto = "Día inválido";
    }

if (diaSemana === 0 || diaSemana === 6) {
  resultado.textContent = `El dia de la semana es ${resultadoTexto}, y ese día se descansa.`;
} else {
  resultado.textContent =`El dia de la semana es ${resultadoTexto}, día laborable.`

}
   
  });
});