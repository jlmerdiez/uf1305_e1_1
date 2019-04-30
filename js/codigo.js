function copyAnio() {
  let anio = new Date().getFullYear();
  document.getElementById("copyanio").innerHTML = anio;
}

function voltear() {
	let numero = prompt("Por favor, introduzca un número de más de un dígito:");
	let invertido;

	if (numero != null && numero.length > 1) {
		invertido = invertir(numero);
    	alert("El número " + numero + " invertido es " + invertido + '.');
  	} else {
		alert("Lo que ha introducido no es válido. Vuelva a intentarlo.");
	}
}

function invertir(parCadena) {
	let arr = parCadena.split('');
	arr.reverse();
	return arr.join('');
}

function fechaHora() {
  	let fecha = new Date();
	let dia, hora;
	// Los índices de los elementos del array coinciden con los valores de .getDay()
	let arrSemana = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
	// Asigno a diaSemana el día en texto
	dia = arrSemana[fecha.getDay()];
	hora = fecha.getHours() + ':' + (fecha.getMinutes()<10?'0':'') + fecha.getMinutes();
	// Escrimos la cadena con los datos en un elemento HTML originalmente vacío
  	document.getElementById("fechahora").innerHTML = "<strong>RESULTADOS:</strong> Hoy es: " + dia + '. La hora actual es ' + hora + '.';
}