const main = document.querySelector('main')
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(usuarios => {
    usuarios.forEach(usuario => {
      let infousuario = document.createElement('article');
      infousuario.innerHTML = htmlUsuarios(usuario.id, usuario.name, usuario.username);
      main.appendChild(infousuario);
    });
  });

// Función para generar el HTML de cada usuario
function htmlUsuarios(id, name, username) {
  let html = `
    <h4 class="nombre">${name}</h4>
    <h5 class="usuario">${username}</h5>
    <button class="eliminar btn btn-danger" data-id="${id}">Eliminar</button>
  `;
  return html;
}

// Funcion para agregar nuevo usuario

function agregarUsuario(evt) {
  evt.preventDefault()
  const nuevoNombre = document.getElementById("nombre").value
  const NuevoUsername = document.getElementById("usuario").value
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: nuevoNombre, username: NuevoUsername })
  })
    .then(response => response.json())
    .then(nuevoUsuario => {
      let infousuario = document.createElement('article');
      infousuario.innerHTML = htmlUsuarios(nuevoUsuario.id, nuevoUsuario.name, nuevoUsuario.username);
      main.appendChild(infousuario);
      document.getElementById('nombre').value = '';
      document.getElementById('usuario').value = '';
    });
}

const botonAgregarUsuarios = document.getElementById("agregar");
botonAgregarUsuarios.addEventListener("click", agregarUsuario)


// Función para eliminar usuario
function eliminarUsuario(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        //eliminar del DOM
        const usuarioAEliminar = document.querySelector(`button[data-id="${userId}"]`).parentNode;
        usuarioAEliminar.remove();
      } else {
        console.error('Error al eliminar usuario');
      }
    })
}

//Evento para eliminar usuario
main.addEventListener('click', event => {
  if (event.target.classList.contains('eliminar')) {
    const userId = event.target.getAttribute('data-id');
    eliminarUsuario(userId);
  }
})



//Funcion para modificar usuario 
function ModifcarUsuario(evt) {
  evt.preventDefault()
  const userId = document.getElementById("id").value
  const nombreEditado = document.getElementById("nombreModificado").value
  const usernameEditado = document.getElementById("usuarioModificado").value

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({  name: nombreEditado, username: usernameEditado }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if (response.ok) {
      // Actualización exitosa, actualizar datos en el DOM
      const usuarioActualizado = document.querySelector(`button[data-id="${userId}"]`).parentNode;
      usuarioActualizado.querySelector('.nombre').textContent = nombreEditado;
      usuarioActualizado.querySelector('.usuario').textContent = usernameEditado;
      document.getElementById('nombreModificado').value = '';
      document.getElementById('usuarioModificado').value = '';
    } else {
      console.error('Error al editar usuario');
    }
  })
    document.getElementById('nombreModificado').value = '';
    document.getElementById('usuarioModificado').value = '';
}

const botonModificarUsuario = document.getElementById("modificar");
botonModificarUsuario.addEventListener("submit", ModifcarUsuario);