/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var promedio;
	var numeroIngresado;
	var seguir;


	contador=0;
	acumulador=0;
	seguir='Si';

	while (seguir=='Si')
	{
		numeroIngresado= prompt ("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);

		acumulador= acumulador + numeroIngresado;
		contador=contador+1;

		seguir= prompt("Desea ingresar otro numero? Si/No");
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/* var contador;
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
} */