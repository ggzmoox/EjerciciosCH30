document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("sendBtn");
    const resultado = document.getElementById("resultado");
  
    sendBtn.addEventListener("click", function() {
      const year = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value) - 1;
      const day = parseInt(document.getElementById("year").value);
      
      const fecha = new Date(day, month, year);
  
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
  
      resultado.textContent = resultadoTexto;
    });
  });