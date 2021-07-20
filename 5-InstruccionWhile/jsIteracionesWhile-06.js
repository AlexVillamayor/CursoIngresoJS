/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio
Alex Villamayor Division D*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while (contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador= acumulador+ numeroIngresado;
		contador=contador+1;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}
//FIN DE LA FUNCIÓN
//txtIdSuma
//txtIdPromedio