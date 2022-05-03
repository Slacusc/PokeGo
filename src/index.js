

let btn = document.getElementById("start");
btn.addEventListener("click", start);
  function start() {
    window.location="buscador.html";
}

function storeData(){
  sessionStorage.name = document.getElementById("name").value; 
}

