/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Alex Villamayor Division D */
function FahrenheitCentigrados () 
{
	var temperatura;
	var resultado;

	temperatura=document.getElementById('txtIdTemperatura').value;

	resultado= (temperatura-32)*5/9;

	alert("La temperatura ingresada es "+resultado.toFixed(2)+" centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var resultado;

	temperatura=document.getElementById('txtIdTemperatura').value;
	resultado= (temperatura*9/5)+32;

	alert("La temperatura ingresada es: "+resultado.toFixed(2)+" Fahrenheit");

}
