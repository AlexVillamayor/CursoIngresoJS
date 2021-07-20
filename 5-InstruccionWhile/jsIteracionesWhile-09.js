/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()

{
	var numeroIngresado;
	var seguir;
	var minimo;
	var maximo;
	var primerNumero;
	
	seguir=true;
	primerNumero=false;

	while (seguir==true)
	{
		numeroIngresado= prompt("Ingrese un numero:");
		numeroIngresado= parseInt(numeroIngresado);

		if (primerNumero== false || numeroIngresado> maximo)
		{
			maximo = numeroIngresado;
		}
		if (primerNumero== false || numeroIngresado < minimo)
		{
			minimo= numeroIngresado;
			primerNumero=true;
		}

	}
	

	document.write("Maximo" +maximo+"minimo"+ minimo);
}
	
	/* if (primerNumero==false)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
			primerNumero=true;
		}
		else
		{
			if ( primerNumero > maximo)
			{
				maximo=numeroIngresado;
			}	
			else
			{
				if (numeroIngresado<minimo)
				{
				minimo=numeroIngresado;
				}
			}
	seguir= confirm("Ingrese otro") */


	

