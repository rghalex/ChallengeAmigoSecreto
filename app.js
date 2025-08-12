// Lista vacía al inicio; nombres serán agregados por el usuario
let amigos = [];

// Referencias DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Mostrar lista de amigos agregados
function mostrarLista() {
  listaAmigos.innerHTML = "";
  amigos.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  });
}

// Agregar amigo nuevo
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  if (nombre === "") {
    alert("⚠️ Por favor ingresa un nombre válido.");
    return;
  }
  amigos.push(nombre);
  inputAmigo.value = "";
  mostrarLista();
}

// Sortear amigo de la lista actual
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ No hay amigos en la lista para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}



