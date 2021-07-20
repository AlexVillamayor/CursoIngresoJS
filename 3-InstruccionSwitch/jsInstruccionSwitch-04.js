function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		mensaje="Este mes tiene 31 dias";
		break;
		case "Febrero":
		mensaje="Este mes tiene 28 dias";
		default:
		mensaje="Este mes tiene 30 dias";
		break;
	}

	alert(mensaje);
	
	
}//FIN DE LA FUNCIÓN
/*enero =31
febrero =28
marzo=31
abril=30
mayo=31
junio=30
julio=31
agosto=31
septiembre=30
octubre=31
noviembre=30
diciembre=31 
txtIdMes*/