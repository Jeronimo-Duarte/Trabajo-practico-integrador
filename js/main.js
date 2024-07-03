class Persona {
    constructor(nombre, apellido, edad, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
        this.dni = dni
    }
    //Método
    adoptar() {
        this.adoptar = true;
    }
}

function agregarPersona(evt) {
    evt.preventDefault()
    const inputNombre = document.getElementById("nombre");
    const nombre = inputNombre.value.trim();
    const inputApellido = document.getElementById("apellido");
    const apellido = inputApellido.value.trim();
    const inputEdad = document.getElementById("edad");
    const edad = inputEdad.value.trim();
    const inputDNI = document.getElementById("dni");
    const Dni = inputDNI.value.trim();

    if (nombre != "" & apellido != "" & edad != "" & Dni != "") {
        const nuevaPersona = new Persona(nombre, apellido, edad, Dni);
        //Crear el elemento de la lista
        const elementoLista = document.createElement("li");
        elementoLista.textContent = `Nombre: ${nuevaPersona.nombre}, Apellido: ${nuevaPersona.apellido}, Edad : ${nuevaPersona.edad}, DNI: ${nuevaPersona.dni}`;
        //crear boton de eliminar para cada elemento
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "eliminar"
        botonEliminar.addEventListener("click", function(){
        elementoLista.remove()
        botonEliminar.remove()
        })
        const listaPersonas = document.getElementById("listaPersonas");
        listaPersonas.appendChild(elementoLista)
        listaPersonas.appendChild(botonEliminar)

    }
}

const botonAgregarPersonas = document.getElementById("Guardar");
botonAgregarPersonas.addEventListener("click", agregarPersona)




