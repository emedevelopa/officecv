


const contenedor = document.querySelector(".contenedor");
const boton = document.querySelector("#abrirSheet");

boton.addEventListener("click",()=>{
    contenedor.classList.toggle("abierto");
});