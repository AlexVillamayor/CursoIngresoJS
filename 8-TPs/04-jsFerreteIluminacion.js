/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. scuento del 40 % y si es de otra marca el descuento es del 30
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un de%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 Alex Villamayor Division D TP4*/
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioLamparas;
 	var descuento;
 	var resultado;
 	var total;
 	var impuesto;

 	precioLamparas= 35;

 	cantidadLamparas=document.getElementById('txtIdCantidad').value;
 	cantidadLamparas=parseInt(cantidadLamparas);
 	marcaLamparas=document.getElementById('Marca').value;

 	if(cantidadLamparas>=6)
 	{
 		if(marcaLamparas=="ArgentinaLuz")
 		{
 			total=precioLamparas*cantidadLamparas;
 			descuento=(50/100)*total;
 			resultado=total-descuento;
			document.getElementById("txtIdprecioDescuento").value=descuento;
		}
 	}
	if(cantidadLamparas==5)
 	{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
 			total=precioLamparas*cantidadLamparas;
 			descuento=(40/100)*total;
 			resultado=total-descuento;
 			document.getElementById("txtIdprecioDescuento").value=resultado;
 			}
 			else
 			{
 				if(marcaLamparas="FelipeLamparas")
 				{
 					total=precioLamparas*cantidadLamparas;
 					descuento=(30/100)*total;
 					resultado=total-descuento;
 					document.getElementById("txtIdprecioDescuento").value=resultado;
 				}
 			}
 	}
	if(cantidadLamparas==4)
 	{
 		if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
 		{
 			total=precioLamparas*4;
 			descuento=(25/100)*total;
 			resultado=total-descuento;
 			document.getElementById('txtIdprecioDescuento').value=resultado;
 		}
 		else
 		{
 			if(marcaLamparas=="JeLuz"||marcaLamparas=="HazIluminacion"||marcaLamparas=="Osram")
 			{
 				total=precioLamparas*4;
 				descuento=(20/100)*total;
 				resultado=total-descuento;
 				document.getElementById('txtIdprecioDescuento').value=resultado;
 			}
 		}
 	}
 	if (cantidadLamparas==3)
 	{
 		if(marcaLamparas=="ArgentinaLuz")
 		{
 			total=precioLamparas*3;
 			descuento=(15/100)*total;
 			resultado=total-descuento;
 			document.getElementById('txtIdprecioDescuento').value=resultado;
 		}
 		else
 		{
 			if(marcaLamparas=="FelipeLamparas")
 			{
 				total=precioLamparas*3;
 				descuento=(10/100)*total;
 				resultado=total-descuento;
 				document.getElementById('txtIdprecioDescuento').value=resultado;
 			}	
 			else
 			{
 				if(marcaLamparas=="JeLuz"||marcaLamparas=="HazIluminacion"||marcaLamparas=="Osram")
 				{
 					total=precioLamparas*3;
 					descuento=(5/100)*total;
 					resultado=total-descuento;
 					document.getElementById('txtIdprecioDescuento').value=resultado;
 				}

 			}
 		}
 	}	

 	if(resultado>=120)
 	{
 		impuesto=resultado+(10/100*resultado);
 		alert("IIBB Usted pago "+resultado+" siendo "+impuesto+" el impuesto que se pago");
 	}
 	



}
//txtIdCantidad
//txtIdprecioDescuento 
//document.getElementById('txtIdprecioDescuento').value=resultado;
//Marca
//marcaLamparas=document.getElementById('marca')