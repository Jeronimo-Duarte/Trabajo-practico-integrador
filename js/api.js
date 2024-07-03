const main = document.querySelector('main')

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(
        usuarios => {
          usuarios.forEach(usuario => {
            let infousuario = document.createElement('article');
            infousuario.innerHTML = htmlUsuarios(usuario.name, usuario.username);
            main.appendChild(infousuario);
            
          });
        }
      
      );

      function htmlUsuarios(name,username) {
        let html = `<h2 class = "nombre"> ${name}</h2>
        <h2 class = "usuario"> ${username}</h2>`
        return html
    }