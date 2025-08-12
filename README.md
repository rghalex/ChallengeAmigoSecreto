# 🎁 Amigo Secreto Instrucciones y Detalles Tecnicos   // Autor @rghalex

* Esta es una apliacion web simple, la cual te permitira organizar un sorteo de
  "Amigo Secreto". Como usuario podras ingresar los nombres de tus amigos,   
   visualizarlos en una lista y realizar un sorteo aleatorio para descubrir quien es el amigo asignado.


# Como usar la pagina? Sencillo!

* En el campo de texto, escribe el nombre de un amigo.
* Haz click en el boton "Añadir" para agregar e nombre a la lista visible.
* Si dejas el campo de texto vacío y presionas añadir, la aplicacion te indicara 
  ingresar un nombre valido.

# Ver Lista de Amigos:

* Los nombres ingresados de tus amigos, apareceran en una lista debajo del cuadro de 
  texto.

# Sortear Amigo Secreto

* Una vez tengas todos los nombres ingresados, haz click en el boton "Sortear Amigo" 
  y la aplicacion seleccionara aleatoriamente uno de los nombres de la lista y lo mostrara como tu amigo secreto.


  # Detalles Tecnicos

  * El proyecto usa Java Script para manipular el DOM y controlar la logica

  - Funciones Principales

  agregarAmigo():Añade un nombre nuevo a la lista, con validacion para evitar nombres vacios

  mostrarLista(): Actualiza la lista visible de nombres en pantalla

  sortearAmigo():Selecciona aleatoriamente un nombre de la lista para el sorteo y muestra el resultado

  # Condicionales utilizadas

  * Verificacion de que el campo de texto no este vacio antes de agregar un nombre

  * Comprobacion de que la lista no este vacia antes de realizar el sorteo

  * Alertas que guian al usuario cuando intenta realizar acciones invalidas

  * El codigo uza la funcion Math.random() para generar numeros aleatorios que 
    determinen el amigo secreto.

  * Interactua con la aplicacion desde el navegador o en tu PC con VSC y Disfruta d
    el Sorteo!


