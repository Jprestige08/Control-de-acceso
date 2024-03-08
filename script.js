// Obtiene los elementos HTML por su id
const formPersona = document.getElementById("form-persona");
const formEvento = document.getElementById("form-evento");
const tablaPersonas = document.getElementById("tabla-personas");
const tablaEventos = document.getElementById("tabla-eventos");

// Crea dos arreglos para almacenar las personas y los eventos
let personas = [];
let eventos = [];

// Agrega un evento de submit al formulario de persona
formPersona.addEventListener("submit", function(e) {
    // Evita que se recargue la página al enviar el formulario
    e.preventDefault();
    // Obtiene los valores de los campos del formulario
    let nombre = formPersona.nombre.value;
    let email = formPersona.email.value;
    // Crea un objeto persona con los valores del formulario
    let persona = {
        nombre: nombre,
        email: email
    };
    // Agrega la persona al arreglo de personas
    personas.push(persona);
    // Llama a la función que muestra las personas en la tabla
    mostrarPersonas();
    // Limpia los campos del formulario
    formPersona.reset();
});

// Agrega un evento de submit al formulario de evento
formEvento.addEventListener("submit", function(e) {
    // Evita que se recargue la página al enviar el formulario
    e.preventDefault();
    // Obtiene los valores de los campos del formulario
    let titulo = formEvento.titulo.value;
    let fecha = formEvento.fecha.value;
    let hora = formEvento.hora.value;
    let lugar = formEvento.lugar.value;
    // Crea un objeto evento con los valores del formulario
    let evento = {
        titulo: titulo,
        fecha: fecha,
        hora: hora,
        lugar: lugar
    };
    // Agrega el evento al arreglo de eventos
    eventos.push(evento);
    // Llama a la función que muestra los eventos en la tabla
    mostrarEventos();
    // Limpia los campos del formulario
    formEvento.reset();
});

// Crea una función que muestra las personas en la tabla
function mostrarPersonas() {
    // Obtiene el cuerpo de la tabla de personas
    let tbody = tablaPersonas.tBodies[0];
    // Limpia el contenido del cuerpo de la tabla
    tbody.innerHTML = "";
    // Recorre el arreglo de personas
    for (let i = 0; i < personas.length; i++) {
        // Obtiene la persona en la posición i
        let persona = personas[i];
        // Crea una fila de la tabla
        let tr = document.createElement("tr");
        // Crea una celda para el nombre de la persona
        let tdNombre = document.createElement("td");
        tdNombre.textContent = persona.nombre;
        // Crea una celda para el email de la persona
        let tdEmail = document.createElement("td");
        tdEmail.textContent = persona.email;
        // Crea una celda para las acciones de la persona
        let tdAcciones = document.createElement("td");
        // Crea un botón para editar la persona
        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btn-editar";
        // Agrega un evento de click al botón editar
        btnEditar.addEventListener("click", function() {
            // Llama a la función que edita la persona
            editarPersona(i);
        });
        // Crea un botón para eliminar la persona
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-eliminar";
        // Agrega un evento de click al botón eliminar
        btnEliminar.addEventListener("click", function() {
            // Llama a la función que elimina la persona
            eliminarPersona(i);
        });
    }}
        // Agrega los botones a la celda de acciones