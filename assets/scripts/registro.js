const formulario = document.querySelector("#registro")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = event.target.nombreusuario.value;
    const contraseña = event.target.contraseña.value;
    const confirmarcontraseña = event.target.confirmarcontraseña.value;
    if(contraseña===confirmarcontraseña){
    guardarusuario(usuario,contraseña)
    formulario.reset()
    }else{
        alert("las contraseñas no son iguales")
    }
})



const guardarusuario = (nombreusuario, contraseña) => {
    const usuarios = localStorage.getItem("USUARIOS")
    if (usuarios === null) {
        const usuario = {
            nombre: nombreusuario,
            contraseña: contraseña,
            
        }
        const nuevosusuarios=[usuario];
        localStorage.setItem("USUARIOS", JSON.stringify(nuevosusuarios))

    }else{
        const usuarioconvertidos=JSON.parse(usuarios)
                const relacionusuario={
            nombre: nombreusuario,
            contraseña: contraseña,
        }
        usuarioconvertidos.push(relacionusuario)
        localStorage.setItem("USUARIOS", JSON.stringify(usuarioconvertidos))
    }


}