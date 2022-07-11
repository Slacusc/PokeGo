// import data from "./data/pokemon/pokemon.js";
//2da pág . input ingresar el Pokemon usuario
function filtrar(name,pkmn) {// la funcion parte en la linea 29 del index.js name = nombre index.js = input buscador .filtrar el nombre ingresado por el usuario, se le agregó en la linea 34 un parametro que también trabaja con la data, ese es pkmn.
  let minuscula = name.toLowerCase(); //con el método nos aseguramos que todo el nombre ingresado en el input se devuelva en minúsculas
  let pokemon = pkmn.filter((pokemon) => pokemon.name == minuscula);// (dps => es la condición). filter crea un nuevo array con todos los elementos que cumplan la condición implementada en la función. Filtrar de la data pokemon, el nombre del pokemon que tiene que ser igual al nombre ingresado en el input en minúscula
  // console.log(pokemon);
  return pokemon[0];// retorna TODO lo contenido de ese pokemon de la data.
}


//menú desplegable, debilidades y fortalezas
function filtrartipos(tipo,pkmn){// la fx parte en L.47 de index.js. Nos filtra según el tipo de pokemon dentro la opción elegida, se le pasa un 2do parámetro el cual contiene la data, proviene del arch.index.js L.3
  let pokemon = pkmn.filter((pokemon) => pokemon.type.includes(tipo,pkmn));// se filtra sobre la variable pkmn(data), al argumento pokemon de la fx( dps => es la condición), queremos que nos traiga el type (tipo del pokemon grass, electric , etc) del array. includes se usa para comprobar si un string existe dentro de otra, en este caso dentro de type
  let aleatorio = pokemon[Math.floor(Math.random()*pokemon.length)];// console.log(`aqui esta pokemon ${pokemon.length}`)
  return aleatorio; // con este return hacemos que se resetee y se vaya limpiando donde aparecen los pokemones,y no se acumulen cada vez que uno elige la opción.
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
