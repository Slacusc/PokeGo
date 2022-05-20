import { filtrar, filtrartipos } from "./filtros.js";
import pokemon from "./data/pokemon/pokemon.js";
let selectedPokemon = " ";
let pokemonfortaleza = [];
let pokemondebilidad = [];

//donde se aloja la data
let btn = document.getElementById("start");
if (btn) {
  btn.addEventListener("click", start);
  function start() {
    window.location = "buscador.html";
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
  }
}

//donde se refleja la data
let data = document.getElementById("data");
if (data) {
  window.onload = () => {
    document.getElementById("data").innerHTML =
      "Bienvenido " + localStorage.getItem("name") + " maestro Pokémon";
  };
}
//segundo boton buscar y funciones para ir a buscar la data

let busca = document.getElementById("buscar");
if (busca) {
  busca.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    //console.log(`aqui está el nombre ${nombre}`)
    selectedPokemon = filtrar(nombre);
    console.log(selectedPokemon.name + "       " + selectedPokemon.img);
    let img = document.getElementById("pokeimg");
    img.src = selectedPokemon.img;
    img.classList.add("show");
    document.getElementById(
      "number"
    ).innerHTML = `<p class="hola mauri" > Número ${selectedPokemon.num} - ${selectedPokemon.name}</p>`;
    console.log(selectedPokemon);
  });
}

//menú desplegable mas busqueda de data con info pokemon
let result = document.getElementById("resultado");
let fortaleza = document.getElementById("fortaleza");
if (fortaleza) {
  fortaleza.addEventListener("click", () => {
    document.getElementById("seleccion").innerHTML = "Fortaleza"
    pokemonfortaleza = [];
    selectedPokemon.resistant.forEach((tipo) =>
      pokemonfortaleza.push(filtrartipos(tipo))
    )
    console.log(pokemonfortaleza);
    result.innerHTML = "";
    let limite = pokemonfortaleza.slice(0,3)
    limite.forEach((pokemon) => {
      let pkmn = `
      <div class= "card"> <img src=${pokemon.img}>
      
      <p class="poke" > Número ${pokemon.num} - ${pokemon.name} </p></div>`;
      result.innerHTML += pkmn;
    })
    // let img = document.getElementById("pokepoke");
    // img.src = pokemonfortaleza.img;
    // img.classList.add("show");
    // document.getElementById(
    //   "result"
    // ).innerHTML = `<p class="poke" > Número ${pokemonfortaleza.num} - ${pokemonfortaleza.name}</p>`;
  })
};

let db = document.getElementById("resultado");
let debilidad = document.getElementById("debilidad");
if (debilidad) {
  debilidad.addEventListener("click", () => {
    document.getElementById("seleccion").innerHTML = "Debilidad"
    pokemondebilidad = [];
    selectedPokemon.weaknesses.forEach((tipo) =>
      pokemondebilidad.push(filtrartipos(tipo))
    );
    console.log(pokemondebilidad);
    db.innerHTML = "";
    let limite = pokemondebilidad.slice(0,3)
    limite.forEach((pokemon)=>{
      let pkm = `
      <div class = "card"> <img src=${pokemon.img}>
      <p class="poke" >  Número ${pokemon.num} - ${pokemon.name} </p></div>`;
      db.innerHTML += pkm;
    })
    })
    }
//     // console.log(selectedPokemon.resistant)
//     // let img = document.getElementById("pokepoke");
//     // img.src = pokemondebilidad.img;
    // img.classList.add("show");
    // document.getElementById(
    //   "result"