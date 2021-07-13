//Alex Villamayor Division D TP2
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoT;
	var anchoT;
	var resultado;

	largoT=document.getElementById('txtIdLargo').value;
	anchoT=document.getElementById('txtIdAncho').value;

	largoT=parseInt(largoT);
	anchoT=parseInt(anchoT);

	resultado=(largoT*2+anchoT*2)*3;

	alert ("La cantidad de alambre es de "+resultado+ " metros");


}
function Circulo () 
{
	var radioT;
	var resultado;
	var diametro;
	
	radioT=document.getElementById('txtIdRadio').value;
	radioT=parseInt(radioT);

	diametro= radioT*3.14;

	resultado= (diametro*2)*3;

	alert ("La cantidad de alambre es de "+resultado+" metros");

}
function Materiales () 
{
	var largoT;
	var anchoT;
	var cemento;
	var cal;
	var areatotal;

	largoT=document.getElementById('txtIdLargo').value;
	anchoT=document.getElementById('txtIdAncho').value;
	
	largoT=parseInt(largoT);
	anchoT=parseInt(anchoT);

	areatotal= (largoT*2+anchoT*2)

	cemento= areatotal*2;

	cal= areatotal*3;

alert ("Para el contrapiso necesitas "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");

}
//txtIdLargo
//txtIdAncho
//txtIdRadio