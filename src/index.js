document.addEventListener('DOMContentLoaded', function () {
    const cuentaInput = document.querySelector('.Cuenta-input-box input');
    const personasInput = document.querySelector('.numero-personas-box input');
    const resultadoPropina = document.getElementById('Resultado-propina');
    const resultadoTotal = document.getElementById('resultado-total');
  
    // Función para calcular la propina y total por persona
    function calcular(propinaPorcentaje) {
      const cuenta = parseFloat(cuentaInput.value);
      const personas = parseInt(personasInput.value);
  
      const propinaPorPersona = (cuenta * propinaPorcentaje) / personas;
      const totalPorPersona = cuenta / personas + propinaPorPersona;
  
      // Mostrar resultados en el DOM
      resultadoPropina.textContent = propinaPorPersona.toFixed(2);
      resultadoTotal.textContent = totalPorPersona.toFixed(2);
    }
  
    // Manejar clic en botones de porcentaje
    document.querySelectorAll('.boton-propina').forEach(button => {
      button.addEventListener('click', function () {
        const porcentaje = parseFloat(this.value);
        calcular(porcentaje);
      });
    });
  
    // Manejar cambio en el input de cantidad de personas
    personasInput.addEventListener('input', function () {
      calcular(parseFloat(resultadoPropina.textContent));
    });
  
    // Manejar clic en botón de reinicio
    document.getElementById('boton-reiniciar').addEventListener('click', function () {
      cuentaInput.value = '';
      personasInput.value = '';
      resultadoPropina.textContent = '0.00';
      resultadoTotal.textContent = '0.00';
    });
  });
  