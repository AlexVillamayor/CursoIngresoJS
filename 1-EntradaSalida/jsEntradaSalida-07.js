/*Alex Villamayo Divison D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var num1; //Declaramos variables
var num2;
var resultado;

num1= document. getElementById('txtIdNumeroUno').value; //Se toma el valor mediante ID
num2= document. getElementById('txtIdNumeroDos').value;	

num1= parseInt(num1); 
num2= parseInt(num2);

resultado = num1 + num2; //Se realiza la operacion solicitada 

alert ("El resultado de la suma es: "+resultado); //Se muestra en pantalla el resultado

}


function restar()
{ 
var num1;
var num2;
var resultado;

num1= document. getElementById('txtIdNumeroUno').value;
num2= document. getElementById('txtIdNumeroDos').value;	

num1= parseInt(num1);
num2= parseInt(num2);

resultado = num1 - num2;

alert ("El resultado de la resta es: "+resultado);

}

function multiplicar()
{ 
var num1;
var num2;
var resultado;

num1= document. getElementById('txtIdNumeroUno').value;
num2= document. getElementById('txtIdNumeroDos').value;	

num1= parseInt(num1);
num2= parseInt(num2);

resultado = num1 + num2;

alert ("El resultado de la multiplicacion es: "+resultado);

}

function dividir()
{
var num1;
var num2;
var resultado;

num1= document. getElementById('txtIdNumeroUno').value;
num2= document. getElementById('txtIdNumeroDos').value;	

num1= parseInt(num1);
num2= parseInt(num2);

resultado = num1 / num2;

alert ("El resultado de la division es: "+resultado);



}

//txtIdNumeroUno
//txtIdNumeroDos