/*
Ejercicio para revisar arrays y operaciones en javascript
*/

alert('Comienzo ejercicio 2 !!!')

var frameworks = ["ionic", "angular", "nodejs", "npm"];

var seleccionado = prompt("Ingrese número de cero a tres", "");


if(seleccionado > 3){

	alert('el numero es mayor a 3');
}
else{
	var auxSeleccion = frameworks[Number(seleccionado)];	

	alert('Has seleccionado ' + auxSeleccion);
}


//imprimir array

alert('El array es: (' + frameworks + ')');

//se hace funcion pop sobre el array 

alert('Se ejecuta función pop sobre array ');

 frameworks.pop();

alert('El array ahora es: (' + frameworks + ')'); 


alert('Fin ejercicio 2 !!!');