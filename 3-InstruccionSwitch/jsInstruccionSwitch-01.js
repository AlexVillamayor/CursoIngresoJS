function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje= "Que comiences bien el año!!!";
		break;
		case"Marzo":
			mensaje: "A clases!!!";
		break;
		case"Julio":
			mensaje= "Se vienen las vacaciones!!!";
		break;
		case "Diciembre":
			mensaje= "Felices fiesta!!!";
		break;

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN