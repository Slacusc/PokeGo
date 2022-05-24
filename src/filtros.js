// import data from "./data/pokemon/pokemon.js";

function filtrar(name,pkmn) {// la funcion parte en la linea 29 del index.js name = nombre index.js = input buscador .filtrar el nombre ingresado por el usuario, se le agregó en la linea 34 un parametro que también trabaja con la data, ese es pkmn.
  let minuscula = name.toLowerCase(); //con el método nos aseguramos que todo el nombre ingresado en el input se devuelva en minúsculas
  let pokemon = pkmn.filter((pokemon) => pokemon.name == minuscula);// filter crea un nuevo array con todos los elementos que cumplan la condición implementada en la función. Filtrar de la data pokemon, el nombre del pokemon que tiene que ser igual al nombre ingresado en el input en minúscula
  // console.log(pokemon);
  return pokemon[0];// retorna todo lo contenido de ese pokemon de la data.
}



function filtrartipos(tipo,pkmn){
  let pokemon = pkmn.filter((pokemon) => pokemon.type.includes(tipo));
  let aleatorio = pokemon[Math.floor(Math.random()*pokemon.length)];// console.log(`aqui esta pokemon ${pokemon.length}`)
  return aleatorio;
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
