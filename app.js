// Lista inicial con el nombre de los participantes

let amigos = [];

// Ref elementos DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Funcion para mostrar lista en pantalla
function mostrarLista () {
  listaAmigos.innerHTML = ""; //limpia la lista antes de monstrar
  amigos.forEach ((nombre) => {
    let li = document.createElement ("li");
    li.textcontent = nombre;
    listaAmigos.appendChild(li);
  });
}

// Funcion para agregar amigo

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  if (nombre === "") {
    alert("Por favor ingresa un nombre valido");
    return;
  }

  amigos.push(nombre);
  inputAmigo.value = ""; //limpar campo
  mostrarLista();
}

// Funcion sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para el sorteo");
      return;
    }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos(indiceAleatorio);

  resultado.innerHTML = <li> Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>;

}

// Mostrar lista incial al cargar
mostrarLista();
