/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//Alex Villamayor Division D TP 1
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;
 
 	precio1=document.getElementById('txtIdPrecioUno').value;
 	precio2=document.getElementById('txtIdPrecioDos').value;
 	precio3=document.getElementById('txtIdPrecioTres').value

 	precio1=parseInt(precio1);
 	precio2=parseInt(precio2);
 	precio3=parseInt(precio3);

 	resultado= precio1 + precio2+ precio3;

 	alert ("La suma es: " + resultado);
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;
 
 	precio1=document.getElementById('txtIdPrecioUno').value;
 	precio2=document.getElementById('txtIdPrecioDos').value;
 	precio3=document.getElementById('txtIdPrecioTres').value

 	precio1=parseInt(precio1);
 	precio2=parseInt(precio2);
 	precio3=parseInt(precio3);

 	resultado=(precio1 + precio2 + precio3)/3;

 	alert ("El promedio es: "+resultado);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;
 
 	precio1=document.getElementById('txtIdPrecioUno').value;
 	precio2=document.getElementById('txtIdPrecioDos').value;
 	precio3=document.getElementById('txtIdPrecioTres').value

 	precio1=parseInt(precio1);
 	precio2=parseInt(precio2);
 	precio3=parseInt(precio3);

 	resultado= (precio1+precio2+precio3)*1.21;

 	alert("El precio final con impuestos es: "+resultado);
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres