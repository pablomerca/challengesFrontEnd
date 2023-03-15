
var dropDownNav = document.getElementById("dropMenu");
var burger = document.getElementById("burger");

burger.addEventListener("click",  () => dropDownNav.classList.toggle("hidden"));


// es muuuy importante que la etiqueta script la coloque justo antes de cerrar el body
// si la colocaba en el head, no me iba a reconocer los ids de los elementos, ya que la creacion de los mismos
// en el arbol dom, ocurre despues de la carga de el script.

