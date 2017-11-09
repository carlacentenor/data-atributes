var imageVideoGame = document.querySelectorAll(".image-videogame"); /*seleccionar todas las li con clase .image-videogame (array)*/
for (var i = 0; i < imageVideoGame.length; i++) { /*recorrer el array*/
	imageVideoGame[i].addEventListener('click', infoVideoGame); /*ejecutar la funcion al hacer click*/
}

function infoVideoGame() {
	var name = this.dataset.name; /*obtener la info de data-name*/
	var date = this.dataset.date; /*obtener la info de data-date*/

	var info = document.createElement('p'); /*creando un elemento p donde colocar la info*/
	info.classList.add("active"); /* agrega la clase active al nuevo elemento p*/
	info.textContent = "Su nombre es " + name + " y su primera aparición fue en " + date;  /*agrega texto a info*/
	var space = document.querySelector(".information"); /*selecciona el contenedor de la info*/
	space.appendChild(info); /*agrega los nuevos valores de info*/

	var infoVisible = document.querySelector("p.active"); /*selecciona el parrafo a reemplazar segun su clase.. la etiqueta a reemplazar(p) debe tener display none*/
	infoVisible.classList.remove("active"); /*borra el texto inicial para que se pueda ver la nueva info*/
}
