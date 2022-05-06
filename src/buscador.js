import data from "./data/pokemon/pokemon.js";
function filtrar(name) {
  let pokemon = data.pokemon.filter((pokemon) => pokemon.name == name);
  return pokemon[0];
}
// let input = "";
// let selectedPokemon = filtrar(input);
// selectedPokemon.type.forEach((tipo) => {
//   console.log(tipo);
// });

// let img = document.getElementById("pokeimg");
// img.src = selectedPokemon.img;

// document.getElementById(
//   "number"
// ).innerHTML = `<p class="hola mauri" > Número ${selectedPokemon.num} - ${selectedPokemon.name}</p>`;
// se exporta la funcion, en este caso "filtrar"
export { filtrar };
