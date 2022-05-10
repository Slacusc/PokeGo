import { filtrar } from "./buscador.js";
//primer boton pagina inicio
// console.log(window.location);
let btn = document.getElementById("start");
if(btn){
btn.addEventListener("click", start);
function start() {
  window.location = "buscador.html";
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
}
};
let data = document.getElementById("data")
if(data){
  window.onload = ()=>{
  document.getElementById("data").innerHTML = "Bienvenido " + localStorage.getItem("name") + " maestro Pokémon"
} 
}
;
    
//segundo boton buscar
let busca = document.getElementById("buscar");
if(busca){
busca.addEventListener("click", () => {
  console.log("hola");
  let nombre = document.getElementById("nombre").value;
  let selectedPokemon = filtrar(nombre);
  let img = document.getElementById("pokeimg");
  img.src = selectedPokemon.img;
  img.classList.add("show");
  console.log(selectedPokemon);
})
};
