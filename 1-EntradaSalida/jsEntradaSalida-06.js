/*Alex Villamayor Division D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1; //Aclaracion de variables
	var num2;	
	var resultado;

	num1 = document. getElementById('txtIdNumeroUno').value; //Se toman los valores por ID
	num2 = document. getElementById('txtIdNumeroDos').value;
	
	num1 = parseInt (num1);
	num2 = parseInt (num2);

	resultado = num1 + num2; //Se realiza la operacion solicitada.

	alert ("La suma de los numeros es: "+resultado); //Se muestra el resultado mediante Alert



	
}

