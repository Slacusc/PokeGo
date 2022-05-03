//window.onload permite cargar info en la siguiente pagina previa definicion de una funcion
window.onload = showData;
//gigi hizo este sessionstorage que sirve para traer la data recopilada e ingresada por el usuario
function showData(){
        if((sessionStorage.name != undefined)){
// en donde dice "data" es donde se pone la ID en donde se va a imprimir el mensaje que buscamos reproducir en la web.            
            document.getElementById("data").innerHTML = "Bienvenido" + " " + sessionStorage.name + " " + "maestro Pokémon"
    }
    
    }
  
    // document.getElementById("start").onclick=funcion1;
    // }
    // function funcion1(){

