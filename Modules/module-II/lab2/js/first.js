function cambiarColor(){

	var tamano = document.getElementById('parrafo').style.fontSize;
	if(tamano == '35px'){
		document.getElementById('parrafo').style.fontSize='25px';	
		document.getElementById('parrafo').style.color='black';
	}else{
		document.getElementById('parrafo').style.fontSize='35px';
		document.getElementById('parrafo').style.color='green';
	}
}
