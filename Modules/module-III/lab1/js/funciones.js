(function () {
	console.log('Inicio de función anónima');
	alert('Comienzo de ejercicio 3 !!!');
	multiplicar();
} ());

function multiplicar() {
	console.log('Inicio función multiplicar');
	var numero1 = prompt("Ingrese primer número", "");
	var numero2 = prompt("Ingrese segundo número", "");
	var resultado = Number(numero1) * Number(numero2);
	alert('El resultado de la multiplicación es = ' + resultado);
	console.log('Fin función multiplicar');
}