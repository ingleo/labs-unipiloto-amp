/*
Se crea el objeto Diplomado
*/

alert('Comienzo ejercicio 4 !!!');


function Diplomado(nombre, modalidad, docente){
	this.nombre = nombre || "sin";
	this.modalidad = modalidad || "sin";
	this.docente = docente || "sin";
}

Diplomado.prototype = {
	setNombre : function (nombre){
		this.nombre = nombre;
	},
	setModalidad : function (modalidad){
		this.modalidad = modalidad;
	},
	setDocente : function (docente){
		this.docente = docente;
	}
}

var nombreAux = prompt("Ingrese nombre de diplomado", "");
var modalidadAux = prompt("Ingrese modalidad de diplomado", "");
var docenteAux = prompt("Ingrese docente de diplomado", "");


var diplomadoaObj = new Diplomado(nombreAux, modalidadAux, docenteAux);

diplomadoaObj.setNombre(nombreAux);
diplomadoaObj.setModalidad(modalidadAux);
diplomadoaObj.setDocente(docenteAux);

alert('El diplomado es: '+ diplomadoaObj.nombre + '\n' + 
	'La modalidad es: ' + diplomadoaObj.modalidad + '\n' + 
	'El docente es: ' + diplomadoaObj.docente);

console.log('fin de ejercicio 4');

