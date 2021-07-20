/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;
	i=0;
	while(i<10)
	{
		document.write( (i+1) + "<br>");//Te ordena todo uno abajo del otro
		i=i+1;//Incremento de la variable de control
	}
}//FIN DE LA FUNCIÓN