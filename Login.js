const contrOlvidada = document.getElementById("contraOlvidada")
const divLogin = document.getElementById("login")
const divRecordar = document.getElementById("recordarContra")

const botonRecordar = document.getElementById("botonRecuperar");
const campoRecuperar = document.getElementById("campoRecuperar");

const divMensaje = document.getElementById("mensaje")




contrOlvidada.addEventListener("click", () =>{
    divLogin.classList.add("oculto");
    divRecordar.classList.remove("oculto")
})

botonRecordar.addEventListener("click", ()=>{ 
    
    if(campoRecuperar.value != ''){
        divMensaje.classList.remove("oculto");
        divRecordar.classList.add("oculto");
    }
})


const leerForm = (nombreForm) =>{
    let listaElementos = document.querySelectorAll(`form[name=${nombreForm}] > input[type=text]`) 
    console.log(listaElementos);
}