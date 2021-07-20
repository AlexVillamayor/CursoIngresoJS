/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Alex Villamayor Division D*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);

	while(isNaN(numeroIngresado) || (numeroIngresado<0 || numeroIngresado>9)) 
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	document.getElementById('txtIdNumero').value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN
//txtIdNumero
//isNaN= no es un numero