import data from "./data/pokemon/pokemon.js";
function filtrar(name) {
  let minuscula = name.toLowerCase();
  let pokemon = data.pokemon.filter((pokemon) => pokemon.name == minuscula);
  return pokemon[0];
};

function filtrartipos(tipo){
  let pokemon = data.pokemon.filter((pokemon) => pokemon.type.includes(tipo));
  // console.log(`aqui esta pokemon ${pokemon.length}`)
  return pokemon[0];
  //mauro dijo algo de la funcion random para que lance un poke random
  
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
export { filtrar, filtrartipos };

//debilidades


//fortalezas
