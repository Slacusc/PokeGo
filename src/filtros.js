import data from "./data/pokemon/pokemon.js"; // importación por defecto.import se usa para importar fx exportadas desde un módulo externo
function filtrar(name) {//name = nombre index.js = input buscador .filtrar el nombre ingresado por el usuario
  let minuscula = name.toLowerCase(); //con el método nos aseguramos que todo el nombre ingresado en el input se devuelva en minúsculas
  let pokemon = data.pokemon.filter((pokemon) => pokemon.name == minuscula);//(pokemon(en naranjo) cada pokemon iterado). dps => es la condición. filter crea un nuevo array con todos los elementos que cumplan la condición implementada en la función.Filtrar de la data pokemon, el nombre del pokemon que tiene que ser igual al nombre ingresado en el input en minúscula
  //console.log(pokemon);
  return pokemon[0];// retorna todo lo contenido de ese pokemon de la data 
};

function filtrartipos(tipo){
  let pokemon = data.pokemon.filter((pokemon) => pokemon.type.includes(tipo));// método includes comprueba si algo está dentro de un array , devuelve respuesta booleana.Filtrar de la data pokemon, que el  
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
