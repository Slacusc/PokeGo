import { filtrar } from "./buscador.js";
//primer boton pagina inicio
// console.log(window.location);
// let btn = document.getElementById("start");
// btn.addEventListener("click", start);
// function start() {
//   window.location = "buscador.html";
// }

function storeData() {
  sessionStorage.name = document.getElementById("name").value;
}

//segundo boton buscar
let busca = document.getElementById("buscar");
busca.addEventListener("click", () => {
  console.log("hola");
  let nombre = document.getElementById("nombre").value;
  let selectedPokemon = filtrar(nombre);
  let img = document.getElementById("pokeimg");
  img.src = selectedPokemon.img;
  img.classList.add("show");
  console.log(selectedPokemon);
});
