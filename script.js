// Obtener referencias a los elementos HTML relevantes
const form = document.getElementById("form");
const table = document.getElementById("table");
const nombreInput = document.getElementById("nombre");
const cajaInput = document.getElementById("caja");
const horarioInput = document.getElementById("horario");
const diaInput = document.getElementById("dia");
const turnoInput = document.getElementById("turno");

// Escuchar el evento "submit" del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir que se recargue la página

  // Obtener los valores de los inputs
  const nombre = nombreInput.value;
  const caja = cajaInput.value;
  const horario = horarioInput.value;
  const dia = diaInput.value;
  const turno = turnoInput.value;

  // Crear una nueva fila en la tabla
  const row = table.insertRow();

  // Insertar celdas en la fila y asignarles los valores de los inputs
  const nombreCell = row.insertCell();
  nombreCell.innerText = nombre;

  const cajaCell = row.insertCell();
  cajaCell.innerText = caja;

  const horarioCell = row.insertCell();
  horarioCell.innerText = horario;

  const diaCell = row.insertCell();
  diaCell.innerText = dia;

  const turnoCell = row.insertCell();
  turnoCell.innerText = turno;
});
