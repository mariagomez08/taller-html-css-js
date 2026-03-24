const numeroContador = document.getElementById("numeroContador");
const botonAumentar = document.getElementById("btnAumentar");
const botonDecrementar = document.getElementById("btnDecrementar");

let aux = 1;

let fuePulsado = false;

console.log("Estoy aqui");

botonAumentar.addEventListener("click", () => {
  fuePulsado = true;
  if (fuePulsado && aux <10) {
    aux = aux + 1;
    numeroContador.textContent = aux; // <--- aqui pasamos el dato al dom, obtener o modificar el contenido de texto
    document.numeroContador = aux;
  }else{
    numeroContador.style.color = "blue"
  }
});

botonDecrementar.addEventListener("click", () => {
  fuePulsado = true;
  if (fuePulsado && aux > 0) {
    aux = aux - 1;
    numeroContador.textContent = aux; // <--- aqui pasamos el dato al dom, obtener o modificar el contenido de texto, 
    document.numeroContador = aux;
    if(aux === 1){
        return
    }
  }else{
    numeroContador.style.color = "red"
  }
});

