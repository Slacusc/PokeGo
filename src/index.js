import { filtrar, filtrartipos } from "./filtros.js";
import pokemon from "./data/pokemon/pokemon.js";
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
    
//segundo boton buscar y funciones para ir a buscar la data

let selectedPokemon = " "
let busca = document.getElementById("buscar");
if(busca){
busca.addEventListener("click", () => {
  // console.log("hola");
  let nombre = document.getElementById("nombre").value;
  selectedPokemon = filtrar(nombre);
  let img = document.getElementById("pokeimg");
  img.src = selectedPokemon.img;
  img.classList.add("show");
  document.getElementById("number").innerHTML = `<p class="hola mauri" > Número ${selectedPokemon.num} - ${selectedPokemon.name}</p>`;
  console.log(selectedPokemon);
})
};

//menú desplegable mas busqueda de data con info pokemon

let fortaleza = document.getElementById("fortaleza");
if(fortaleza){
fortaleza.addEventListener("click", () => {
  selectedPokemon.resistant.forEach(tipo =>{
    console.log(filtrartipos(tipo))
  })
  });
}
//   // console.log("hola");
//   let nombre = document.getElementById("nombre").value;
//   let selectedPokemon = filtrar(nombre);
//   let img = document.getElementById("pokeimg");
//   img.src = selectedPokemon.img;
//   img.classList.add("show");
//   document.getElementById("number").innerHTML = `<p class="hola mauri" > Número ${selectedPokemon.num} - ${selectedPokemon.name}</p>`;
//   console.log(selectedPokemon);
// })
// };