const formulario = document.querySelector("#login")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = event.target.nombreusuario.value;
    const contraseña = event.target.contraseña.value;
    autenticarusuario(usuario, contraseña);
})

const autenticarusuario = (nombreusuario, contraseña) => {
    const usuarios = localStorage.getItem("USUARIOS")
    if (usuarios === null) {
        alert("el usuario no existe, registrese")
    } else {
        const usuarioconvertidos = JSON.parse(usuarios);
        for (const usuario of usuarioconvertidos) {
            console.log(usuario)
            if (usuario.nombre === nombreusuario && usuario.contraseña === contraseña) {
                window.location.href="usuario.html"
                return;
            }
        }
        alert("el usuario no existe, registrese")


    }
}

// const sumar = (a,b) => a+b;
// const a=3
// const b=4
// console.log(sumar(a,b))

