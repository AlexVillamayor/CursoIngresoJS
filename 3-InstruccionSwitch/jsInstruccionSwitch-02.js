function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje="Falta para el invierno";
		break;
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio";
		break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!";
		break;	
	}
	alert(mensaje);
}
/*Julio-Agosto: "Abrigate que hace frio"
	Septiembre-Febrero: "Ya pasamos el frio, ahora calor!!!"
	Marzo-Junio: "Falta para el invierno"*/
