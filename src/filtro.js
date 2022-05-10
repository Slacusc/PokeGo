import { filtrar } from "./buscador.js";

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
